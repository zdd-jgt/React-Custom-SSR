import Koa from "koa";
import serve from "koa-static";
import path from "node:path";
import { renderApp } from "./app";
import { getHtmlTemplate } from "./htmlTemplate"

// 创建服务
const app = new Koa();

// 托管静态资源 
app.use(serve(path.resolve(process.cwd(), "dist/client")));

// 调用 renderApp 返回 HTML
app.use(async(ctx) => {
    const { appHtml, dehydratedState } = await renderApp(ctx);

    ctx.type = "html";
    ctx.body = getHtmlTemplate({
        appHtml,
        dehydratedState
    })
});

// 监听端口
app.listen(3000, () => {
    console.log("SSR server running at http://localhost:3000")
})

