import type { FilledContext } from "react-helmet-async"
import type { ChunkExtractor } from "@loadable/server";
export interface HtmlTemplateOptions {
    appHtml:string;
    dehydratedState: unknown;
    helmetContext: FilledContext;
    extractor: ChunkExtractor;
}

export const getHtmlTemplate = ({
    appHtml,
    dehydratedState,
    helmetContext,
    extractor,
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
            ${extractor.getLinkTags()}
            ${extractor.getStyleTags()}
        </head>
        
        <body ${helmet?.bodyAttributes.toString() ?? ""}>
            <div id="root">${appHtml}</div>
            <script id="__REACT_QUERY_STATE__" type="application/json">
                ${JSON.stringify(dehydratedState)}
            </script>
            ${extractor.getScriptTags()}
        </body>
    </html>
    `
}
// 专门负责生成 HTML