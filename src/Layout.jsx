import PropTypes from "prop-types";
import React, { useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import UserPanel from "./components/UserPanel";
import LocaleContext from "./contexts/LocaleContext ";
import { getUserLogged } from "./utils/network-data";

const Layout = ({ isAuth, onLogout }) => {
    const [user, setUser] = useState(null);
    const [language, setLanguage] = useState(localStorage.getItem("language") || "id");
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const toggleLanguage = () => {
        setLanguage((prevState) => {
            const newLanguage = prevState === "id" ? "en" : "id";
            localStorage.setItem("language", newLanguage);
            return newLanguage;
        });
    };

    const toggleTheme = () => {
        setTheme((prevState) => {
            const newTheme = prevState === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            document.documentElement.setAttribute("app-theme", newTheme);
            return newTheme;
        });
    };

    const LocaleContextValue = useMemo(() => {
        return {
            language,
            toggleLanguage,
            theme,
            toggleTheme,
        };
    }, [language, theme]);

    useEffect(() => {
        if (isAuth) {
            getUserLogged().then(({ data }) => {
                setUser(data);
            });
        }
        document.documentElement.setAttribute("app-theme", theme);
    }, [isAuth]);

    return (
        <LocaleContext.Provider value={LocaleContextValue}>
            <div className="app-container">
                <header>
                    <h1 className="app-title">{language === "id" ? "Aplikasi Catatan" : "Note App"}</h1>
                    <UserPanel user={user?.name ?? ""} isAuth={isAuth} onLogout={onLogout} />
                </header>
                <main>
                    <Outlet />
                    {isAuth ? <Navigation /> : null}
                </main>
            </div>
        </LocaleContext.Provider>
    );
};

Layout.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired,
};

export default Layout;
