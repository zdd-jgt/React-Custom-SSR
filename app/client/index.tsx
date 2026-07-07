import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "../../src/index";
import { BrowserRouter } from "react-router-dom";
import {
    QueryClient,
    QueryClientProvider,
    HydrationBoundary
} from "@tanstack/react-query"

const root = document.querySelector("#root");

if (!root) {
    throw new Error("root element not found")
};

const queryClient = new QueryClient();

const stateElement = document.getElementById("__REACT_QUERY_STATE__");

const dehydratedState = stateElement?.textContent ? JSON.parse(stateElement.textContent) : undefined;

// BrowserRouter: 在浏览器里运行，可以监听地址栏、history、Link 点击。
hydrateRoot(
    root, 
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydratedState}>
                <App />
            </HydrationBoundary>
        </QueryClientProvider>
    </BrowserRouter>
);