import PropTypes from "prop-types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext ";
import useInput from "../hooks/useInput";
import Input from "./Input";

const LoginInput = ({ login }) => {
    const navigate = useNavigate();
    const [email, onChangeEmail] = useInput("");
    const [password, onChangePassword] = useInput("");
    const { language } = useContext(LocaleContext);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        login({ email, password });
        navigate("/");
    };

    return (
        <form className="login-input neumorphism-flat" onSubmit={onSubmitHandler}>
            <Input
                label="Email"
                type="email"
                value={email}
                className="input-email neumorphism-pressed"
                onChange={onChangeEmail}
                required
            />
            <Input
                label={language === "id" ? "kata Sandi" : "Password"}
                type="password"
                value={password}
                className="input-password neumorphism-pressed"
                onChange={onChangePassword}
                required
            />
            <div className="input-btn">
                <button className="btn submit-btn" type="submit">
                    {language === "id" ? "Masuk" : "Sign in"}
                </button>
            </div>
        </form>
    );
};

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
};

export default LoginInput;
