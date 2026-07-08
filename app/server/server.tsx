import Koa from "koa";
import serve from "koa-static";
import path from "node:path";
import { ChunkExtractor } from "@loadable/server";
import { renderApp } from "./app";
import { getHtmlTemplate } from "./htmlTemplate"

// 创建服务
const app = new Koa();

// 托管静态资源 
app.use(serve(path.resolve(process.cwd(), "dist/client")));

const statsFile = path.resolve(
    process.cwd(),
    "dist/client/loadable-stats.json"
)

// 调用 renderApp 返回 HTML
app.use(async(ctx) => {
    const extractor = new ChunkExtractor({
        statsFile,
        entrypoints: ["client"]
    })

    const { appHtml, dehydratedState, helmetContext } = await renderApp(
        ctx,
        extractor
    );

    ctx.type = "html";
    ctx.body = getHtmlTemplate({
        appHtml,
        dehydratedState,
        helmetContext,
        extractor
    })
});

// 监听端口
app.listen(3000, () => {
    console.log("SSR server running at http://localhost:3000")
})

