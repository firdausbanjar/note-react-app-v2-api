import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import NoteButton from "./NoteButton";
import NoteItemBody from "./NoteItemBody";

const NoteItem = ({ note, onArchiveNote, onUnarchiveNote, onDeleteNote }) => {
    return (
        <div className="neumorphism-flat item">
            <Link style={{ textDecoration: "none" }} to={`/notes/${note?.id}`}>
                <NoteItemBody {...note} />
            </Link>
            <NoteButton
                id={note.id}
                isArchived={note.archived}
                position="center"
                onArchiveNote={onArchiveNote}
                onUnarchiveNote={onUnarchiveNote}
                onDeleteNote={onDeleteNote}
            />
        </div>
    );
};

NoteItem.propTypes = {
    note: PropTypes.object.isRequired,
    onArchiveNote: PropTypes.func,
    onUnarchiveNote: PropTypes.func,
    onDeleteNote: PropTypes.func,
};

export default NoteItem;
