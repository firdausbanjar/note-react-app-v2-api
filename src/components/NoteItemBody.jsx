import parse from "html-react-parser";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext ";
import { showFormattedDate } from "../utils";

const NoteItemBody = ({ title, body, createdAt }) => {
    const { language } = useContext(LocaleContext);
    const lang = language === "id" ? "id-ID" : "en-EN";
    return (
        <div className="note-item">
            <h3 className="note-title">{title ?? ""}</h3>
            <p className="note-date">{showFormattedDate(createdAt, lang) ?? ""}</p>
            <div className="note-body" dangerouslySetInnerHTML={{ __html: parse(body ?? "") }} />
        </div>
    );
};

NoteItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteItemBody;
