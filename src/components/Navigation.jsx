import { FaArchive, FaHome, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul className="neumorphism-flat">
                <li className="home-menu">
                    <Link to="/">
                        <FaHome size={30} className="icon" />
                    </Link>
                </li>
                <li className="new-menu">
                    <Link to="/notes/new" className="icon">
                        <FaPlus size={30} />
                    </Link>
                </li>
                <li className="archive-menu">
                    <Link to="/archives">
                        <FaArchive size={30} className="icon" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
