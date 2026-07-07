import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <main>
             <Helmet>
                <title>About Page - Custom SSR</title>
                <meta name="description" content="This is the SSR about page" />
            </Helmet>
            
            <h1>About Page</h1>
            <Link to="/">Go Home</Link>
        </main>
    )
}

export default About;