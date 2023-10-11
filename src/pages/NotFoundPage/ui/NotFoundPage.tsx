import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { Page } from "@/widgets/Page";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
    const titlePage = "Упс!";
    const descriptionPage = `Кажется что-то пошло не так....`;

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            navigate(RoutePath.converter);
        }, 2000);
    
        return () => clearTimeout(redirectTimer);
    }, [navigate]);

    return (
        <Page
            title={titlePage}
            description={descriptionPage}
        >
            Страница не найдена
        </Page>
    );
};

export default NotFoundPage;
