import { useContext, useEffect } from "react";
import KoaContext from "./KoaContext";
import { useNavigate } from "react-router-dom";

interface RedirectProps {
    to: string;
    status?: number;
}

const Redirect = ({to, status = 302 }:RedirectProps) => {
    const context = useContext(KoaContext);
    const navigate = useNavigate();

    // CSR 没有 Koa context
    useEffect(() => {
        if (!context) {
            navigate(to, {replace: true});
        }
    }, [context, navigate, to]);

    // SSR 有 Koa context
    if (context) {
        context.status = status;
        context.redirect(to)
    }

    return null;
}

export default Redirect;