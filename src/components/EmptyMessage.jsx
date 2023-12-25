import PropTypes from "prop-types";
import React from "react";

const EmptyMessage = ({ label }) => {
    return (
        <div className="empty">
            <p>{label}</p>
        </div>
    );
};

EmptyMessage.propTypes = {
    label: PropTypes.string.isRequired,
};

export default EmptyMessage;
