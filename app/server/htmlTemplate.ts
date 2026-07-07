import type { FilledContext } from "react-helmet-async"
export interface HtmlTemplateOptions {
    appHtml:string;
    dehydratedState: unknown;
    helmetContext: FilledContext;
}

export const getHtmlTemplate = ({
    appHtml,
    dehydratedState,
    helmetContext,
}: HtmlTemplateOptions) => {
    const helmet = helmetContext.helmet;
    return `
    <!DOCTYPE html>
    <html ${helmet?.htmlAttributes.toString() ?? ""}>
        <head>
            <meta charset="utf-8" />
            ${helmet?.title.toString() ?? "<title>React Custom SSR</title>"}
            ${helmet?.meta.toString() ?? ""}
            ${helmet?.link.toString() ?? ""}
        </head>
        
        <body ${helmet?.bodyAttributes.toString() ?? ""}>
            <div id="root">${appHtml}</div>
            <script id="__REACT_QUERY_STATE__" type="application/json">
                ${JSON.stringify(dehydratedState)}
            </script>
            <script src="/client.js"></script>
        </body>
    </html>
    `
}
// 专门负责生成 HTML