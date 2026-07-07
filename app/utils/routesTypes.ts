import type {
    IndexRouteObject,
    NonIndexRouteObject,
    Params
} from "react-router-dom";
import type { QueryKey } from "@tanstack/react-query";
import { useSyncExternalStore } from "react";

interface PreFetchRoute {
    queryKey?: QueryKey;
    loadData?: (params: Params<string>) => Promise<unknown>;
}

interface PreFetchIndexRouteObject extends PreFetchRoute, IndexRouteObject {}

interface PreFetchNonIndexRouteObject extends PreFetchRoute, NonIndexRouteObject {
    children?: PreFetchRouteObject[];
}

export type PreFetchRouteObject = | PreFetchIndexRouteObject | PreFetchNonIndexRouteObject;
