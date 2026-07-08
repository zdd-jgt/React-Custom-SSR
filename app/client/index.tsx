import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import {
    QueryClient,
    QueryClientProvider,
    HydrationBoundary
} from "@tanstack/react-query"
import { loadableReady } from "@loadable/component";
import App from "../../src/index";

const root = document.querySelector("#root");

if (!root) {
    throw new Error("root element not found")
};

const queryClient = new QueryClient();

const stateElement = document.getElementById("__REACT_QUERY_STATE__");

const dehydratedState = stateElement?.textContent ? JSON.parse(stateElement.textContent) : undefined;

// BrowserRouter: 在浏览器里运行，可以监听地址栏、history、Link 点击。
const render = () => {
    hydrateRoot(
        root, 
        <BrowserRouter>
            <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                    <HydrationBoundary state={dehydratedState}>
                        <App />
                    </HydrationBoundary>
                </QueryClientProvider>
            </HelmetProvider>
        </BrowserRouter>
    );
}

// 等当前页面需要的异步 chunk 加载完成
// 再执行 hydrate
// 避免服务端 HTML 和客户端组件加载状态不一致
loadableReady(render)