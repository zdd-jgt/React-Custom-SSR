import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { QueryKeys } from "../apis/querykeys";
import { getHomeList } from "../apis/services/Home"

const Home = () => {
    // 缓存一份叫 home-list 的数据
    const homeQuery = useQuery({
        queryKey: [QueryKeys.HOME_LIST],
        queryFn: getHomeList,
    })
    return (
        <main>
            <Helmet
                htmlAttributes={{
                    lang: "zh-CN"
                }}
                bodyAttributes={{
                    class: "home-page"
                }}
            >
                <title>Home Page - Custom SSR</title>
                <meta name="description" content="This is the SSR home page" />
            </Helmet>

            <h1>Home Page</h1>
            <nav>
                <Link to="/about">Go About</Link>
                <br />
                <Link to="/old-about">Go Old About</Link>
            </nav>
            <ul>
                {
                    homeQuery.data?.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
        </main>
    )
}

export default Home;