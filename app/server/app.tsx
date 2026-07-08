import { renderToString } from "react-dom/server";
import { StaticRouter, matchRoutes } from "react-router-dom";
import {
    QueryClient,
    QueryClientProvider,
    dehydrate,
    HydrationBoundary
} from "@tanstack/react-query";
import { HelmetProvider, type FilledContext } from "react-helmet-async";
import type { Context } from "koa";
import { ChunkExtractor } from "@loadable/server";
import App from "../../src/index";
import routes from "../../src/routes";

// prefetch：根据当前 URL 预取 route 数据
export const prefetch = async (ctx: Context, queryClient: QueryClient) => {
    const matches = matchRoutes(routes, ctx.url);

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

// renderApp：完成服务端 React 渲染
export const renderApp = async (ctx: Context, extractor: ChunkExtractor) => {
    const queryClient = new QueryClient();
    const helmetContext = {} as FilledContext;

    await prefetch(ctx, queryClient)
    
    const dehydratedState = dehydrate(queryClient);

    // StaticRouter: 现在服务端正在渲染 ctx.url 这个地址，请你按这个地址匹配路由。
    const appHtml = renderToString(
        extractor.collectChunks(
            <StaticRouter location={ctx.url}>
                <HelmetProvider context={helmetContext}>
                    <QueryClientProvider client={queryClient}>
                        <HydrationBoundary state={dehydratedState}>
                            <App context={ctx} />
                        </HydrationBoundary>
                    </QueryClientProvider>
                </HelmetProvider>
            </StaticRouter>
        )
    );

    queryClient.clear();

    return {
        appHtml,
        dehydratedState,
        helmetContext
    }
}