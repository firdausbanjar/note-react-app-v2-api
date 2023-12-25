import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext ";
import useInput from "../hooks/useInput";
import { register } from "../utils/network-data";
import Input from "./Input";

const RegisterInput = () => {
    const navigate = useNavigate();
    const [name, onChangeName] = useInput("");
    const [email, onChangeEmail] = useInput("");
    const [password, onChangePassword] = useInput("");
    const [confirmPass, onChangeConfirmPass] = useInput("");
    const { language } = useContext(LocaleContext);

    const data = {
        name,
        email,
        password,
    };

    const onSubmitEventHandler = async (event) => {
        event.preventDefault();
        if (password === confirmPass) {
            const { error } = await register(data);
            !error ? navigate("/login") : alert("Gagal buat akun");
        } else {
            alert("Password tidak sama");
        }
    };

    return (
        <form className="register-input neumorphism-flat" onSubmit={onSubmitEventHandler}>
            <Input
                label={language === "id" ? "Nama" : "Name"}
                type="text"
                value={name}
                className="input-name neumorphism-pressed"
                onChange={onChangeName}
                required
            />
            <Input
                label="Email"
                type="email"
                value={email}
                className="input-email neumorphism-pressed"
                onChange={onChangeEmail}
                required
            />
            <Input
                label={language === "id" ? "Kata Sandi" : "Password"}
                type="password"
                value={password}
                className="input-password neumorphism-pressed"
                onChange={onChangePassword}
                required
            />
            <Input
                label={language === "id" ? "Verifikasi Kata Sandi" : "Password Verification"}
                type="password"
                value={confirmPass}
                className="input-password neumorphism-pressed"
                onChange={onChangeConfirmPass}
                required
            />
            <div className="input-btn">
                <button className="btn submit-btn" type="submit">
                    {language === "id" ? "Daftar" : "Sign up"}
                </button>
            </div>
        </form>
    );
};

export default RegisterInput;
