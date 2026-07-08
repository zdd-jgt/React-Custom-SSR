import Redirect from "../../app/utils/Redirect";
import loadable from "../../app/utils/loadable";
import { QueryKeys } from "../apis/querykeys"
import { getHomeList } from "../apis/services/Home";
import type { PreFetchRouteObject } from "../../app/utils/routesTypes";

const Home = loadable(() => import("../pages/Home"), null)
const About = loadable(() => import("../pages/About"), null)

const routes: PreFetchRouteObject[] = [
    {
        path: "/",
        element: <Home />,
        queryKey: [QueryKeys.HOME_LIST],
        loadData: getHomeList
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/old-about",
        element: <Redirect to="/about" status={301} />
    }
]

export default routes;