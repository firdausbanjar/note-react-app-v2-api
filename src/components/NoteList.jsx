import PropTypes from "prop-types";
import React from "react";
import EmptyMessage from "./EmptyMessage";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, emptyMessage, onArchiveNote, onUnarchiveNote, onDeleteNote }) => {
    return notes.length > 0 ? (
        <div className="note-list">
            {notes.map((note, key) => (
                <NoteItem
                    key={key}
                    note={note}
                    onArchiveNote={onArchiveNote}
                    onUnarchiveNote={onUnarchiveNote}
                    onDeleteNote={onDeleteNote}
                />
            ))}
        </div>
    ) : (
        <section className="no-notes">
            <EmptyMessage label={emptyMessage} />
        </section>
    );
};

NoteList.propTypes = {
    notes: PropTypes.array,
    emptyMessage: PropTypes.string.isRequired,
    onArchiveNote: PropTypes.func,
    onUnarchiveNote: PropTypes.func,
    onDeleteNote: PropTypes.func,
};

export default NoteList;
