import PropTypes from "prop-types";
import React, { useContext } from "react";
import { FaMoon, FaSignOutAlt, FaSun, FaUser } from "react-icons/fa";
import LocaleContext from "../contexts/LocaleContext ";

const UserPanel = ({ user, isAuth, onLogout }) => {
    const { language, toggleLanguage, theme, toggleTheme } = useContext(LocaleContext);

    return (
        <div className="user-panel">
            <button className="lang-btn neumorphism-flat" onClick={toggleLanguage}>
                {language === "id" ? "Indonesia" : "English"}
            </button>
            <button className="theme-btn" onClick={toggleTheme}>
                {theme === "light" ? (
                    <FaSun className="icon" size={30} />
                ) : (
                    <FaMoon className="icon" size={30} />
                )}
            </button>
            {isAuth ? (
                <>
                    <button className="logout-btn" onClick={onLogout}>
                        <FaSignOutAlt className="icon" size={30} />
                    </button>
                    <div className="user">
                        <FaUser className="icon user-icon" size={30} />
                        <p className="user-name">{user.toLowerCase()}</p>
                    </div>
                </>
            ) : null}
        </div>
    );
};

UserPanel.propTypes = {
    user: PropTypes.string.isRequired,
    isAuth: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired,
};

export default UserPanel;
