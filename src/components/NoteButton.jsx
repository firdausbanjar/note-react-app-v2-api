import PropTypes from "prop-types";
import React, { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext ";

const NoteButton = ({ id, isArchived, position, onArchiveNote, onUnarchiveNote, onDeleteNote }) => {
    const { language } = useContext(LocaleContext);
    return (
        <div className="btn-group" style={{ justifyContent: position }}>
            {isArchived ? (
                <button className="btn archive-btn" onClick={() => onUnarchiveNote(id)}>
                    {language === "id" ? "Catatan" : "Note"}
                </button>
            ) : (
                <button className="btn archive-btn" onClick={() => onArchiveNote(id)}>
                    {language === "id" ? "Arsip" : "Archive"}
                </button>
            )}
            <button className="btn delete-btn" onClick={() => onDeleteNote(id)}>
                {language === "id" ? "Hapus" : "Delete"}
            </button>
        </div>
    );
};

NoteButton.propTypes = {
    id: PropTypes.string.isRequired,
    isArchived: PropTypes.bool,
    position: PropTypes.string.isRequired,
    onArchiveNote: PropTypes.func,
    onUnarchiveNote: PropTypes.func,
    onDeleteNote: PropTypes.func,
};

export default NoteButton;
