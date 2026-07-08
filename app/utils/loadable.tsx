import type React from "react";
import baseLoadable from "@loadable/component";

const loadable = <T,>(
    dynamicImport: () => Promise<{
        default: React.FunctionComponent<T>;
    }>,
    loading = <div>loading</div>,
    ssr = true
) => {
    return baseLoadable(dynamicImport,{
        fallback: loading,
        ssr,
    })
}

export default loadable;