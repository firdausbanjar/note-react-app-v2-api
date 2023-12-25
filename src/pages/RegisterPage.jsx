import { useContext } from "react";
import { Link } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import LocaleContext from "../contexts/LocaleContext ";

const RegisterPage = () => {
    const { language } = useContext(LocaleContext);
    return (
        <section>
            <h2 className="page-title">{language === "id" ? "Buat Akun" : "Sign up"}</h2>
            <RegisterInput />
            <p className="register-text">
                {language === "id" ? "Sudah punya akun? " : "Already have an account? "}
                <Link to="/login">{language === "id" ? "Masuk disini" : "Sign in here"}</Link>
            </p>
        </section>
    );
};

export default RegisterPage;
