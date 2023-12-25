import PropTypes from "prop-types";
import React from "react";

const Input = (props) => {
    return (
        <div className="input-group">
            <label>{props.label}</label>
            <input type={props.type} value={props.value} {...props} />
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Input;
