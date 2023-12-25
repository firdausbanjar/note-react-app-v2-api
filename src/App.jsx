import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AddNotePage from "./pages/AddNotePage";
import ArchivePage from "./pages/ArchivePage";
import DetailNotePage from "./pages/DetailNotePage";
import LoginPage from "./pages/LoginPage";
import NotePage from "./pages/NotePage";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/RegisterPage";
import { getAccessToken, putAccessToken } from "./utils/network-data";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);

    const onLoginSuccess = async ({ accessToken }) => {
        putAccessToken(accessToken);
        setIsAuth(true);
    };

    const onLogout = () => {
        localStorage.removeItem("accessToken");
        setIsAuth(false);
    };

    useEffect(() => {
        const accessToken = getAccessToken();
        if (!!accessToken) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, [isAuth]);

    return (
        <Routes>
            <Route element={<Layout isAuth={isAuth} onLogout={onLogout} />}>
                {!isAuth ? (
                    <>
                        <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </>
                ) : (
                    <>
                        <Route index element={<NotePage />} />
                        <Route path="/notes/new" element={<AddNotePage />} />
                        <Route path="/archives" element={<ArchivePage />} />
                        <Route path="/notes/:id" element={<DetailNotePage />} />
                        <Route path="/*" element={<PageNotFound />} />
                    </>
                )}
            </Route>
        </Routes>
    );
};

export default App;
