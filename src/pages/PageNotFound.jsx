import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import EmptyMessage from "../components/EmptyMessage";
import LocaleContext from "../contexts/LocaleContext ";

const PageNotFound = () => {
    const navigate = useNavigate();
    const { language } = useContext(LocaleContext);

    const onBackToHome = () => {
        return navigate("/");
    };
    return (
        <section className="not-found-page">
            <EmptyMessage label="(404) Page Not Found" />
            <button onClick={onBackToHome} className="neumorphism-flat btn">
                {language === "id" ? "Kembali" : "Back"}
            </button>
        </section>
    );
};

export default PageNotFound;
