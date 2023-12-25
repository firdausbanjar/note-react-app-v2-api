import PropTypes from "prop-types";
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ keyword, onChangeKeyword }) => {
    return (
        <div className="neumorphism-flat search-bar">
            <input
                type="search"
                className="input-search neumorphism-pressed"
                value={keyword}
                onChange={onChangeKeyword}
            />
            <FaSearch className="icon search-icon" />
        </div>
    );
};

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    onChangeKeyword: PropTypes.func.isRequired,
};

export default SearchBar;
