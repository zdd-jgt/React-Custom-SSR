import Koa from "koa";
import serve from "koa-static";
import path from "node:path";
import App from "../../src/index";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchRoutes } from "react-router-dom";
import {
    QueryClient,
    QueryClientProvider,
    dehydrate,
    HydrationBoundary
} from "@tanstack/react-query";
import { QueryKeys } from "../../src/apis/querykeys"
import { getHomeList } from "../../src/apis/services/Home"
import routes from "../../src/routes";

const prefetchRoutes = async (url: string, queryClient: QueryClient) => {
    const matches = matchRoutes(routes, url);

    if (!matches) return;

    const tasks = matches.map(({ route, params }) => {
        if (route.queryKey && route.loadData) {
            return queryClient.prefetchQuery({
                queryKey: route.queryKey,
                queryFn: () => route.loadData!(params)
            })
        }
        
        return null;
    })
    .filter(Boolean)

    await Promise.allSettled(tasks);
}

const app = new Koa();

app.use(serve(path.resolve(process.cwd(), "dist/client")));

// StaticRouter: 现在服务端正在渲染 ctx.url 这个地址，请你按这个地址匹配路由。
app.use(async(ctx) => {
    const queryClient = new QueryClient();

    // await queryClient.prefetchQuery({
    //     queryKey: [QueryKeys.HOME_LIST],
    //     queryFn: getHomeList,
    // })

    await prefetchRoutes(ctx.url, queryClient)
    
    const dehydratedState = dehydrate(queryClient);
    
    const appHtml = renderToString(
        <StaticRouter location={ctx.url}>
            <QueryClientProvider client={queryClient}>
                <HydrationBoundary state={dehydratedState}>
                    <App context={ctx} />
                </HydrationBoundary>
            </QueryClientProvider>
        </StaticRouter>
    );
    ctx.type = "html";
    ctx.body = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>Router SSR</title>
        </head>
        
        <body>
            <div id="root">${appHtml}</div>
            <script id="__REACT_QUERY_STATE__" type="application/json">
                ${JSON.stringify(dehydratedState)}
            </script>
            <script src="/client.js"></script>
        </body>
    </html>
    `
});

app.listen(3000, () => {
    console.log("SSR server running at http://localhost:3000")
})

