import { createContext } from "react";
import type { Context } from "koa";

const KoaContext = createContext<Context | null>(null)

// 在App中使用包裹在最外层接收一个context
export const KoaProvider = KoaContext.Provider;
export const KoaConsumer = KoaContext.Consumer;

export default KoaContext;