import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { KoaProvider } from "../app/utils/KoaContext"
import type { Context } from "koa";

interface AppProps {
    context?: Context;
}

const App = ({context}: AppProps) => {
    const element = useRoutes(routes);
    return (
        <KoaProvider value={context ?? null}>
            {element}
        </KoaProvider>
    )
}

export default App;