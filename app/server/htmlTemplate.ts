export interface HtmlTemplateOptions {
    appHtml:string;
    dehydratedState: unknown;
}

export const getHtmlTemplate = ({
    appHtml,
    dehydratedState,
}: HtmlTemplateOptions) => {
    return `
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
}
// 专门负责生成 HTML