import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
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