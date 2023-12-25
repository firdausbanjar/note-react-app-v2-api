import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import LocaleContext from "../contexts/LocaleContext ";
import { login } from "../utils/network-data";

const LoginPage = ({ loginSuccess }) => {
    const { language } = useContext(LocaleContext);
    const onLogin = async ({ email, password }) => {
        const { error, data } = await login({ email, password });

        if (!error) {
            loginSuccess(data);
        }
    };

    return (
        <section>
            <h2 className="page-title">{language === "id" ? "Masuk" : "Sign In"}</h2>
            <LoginInput login={onLogin} />
            <p className="login-text">
                {language === "id" ? "Belum punya akun? " : `Don't have an account? `}
                <Link to="/register">{language === "id" ? "Daftar disini" : "Sign up here"}</Link>
            </p>
        </section>
    );
};

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
