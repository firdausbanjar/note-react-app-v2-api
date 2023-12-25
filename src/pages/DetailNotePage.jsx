import parse from "html-react-parser";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmptyMessage from "../components/EmptyMessage";
import NoteButton from "../components/NoteButton";
import LocaleContext from "../contexts/LocaleContext ";
import { showFormattedDate } from "../utils";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/network-data";

const DetailNotePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState({});
    const { language } = useContext(LocaleContext);
    const lang = language === "id" ? "id-ID" : "en-EN";

    const onArchiveNote = async (noteId) => {
        await archiveNote(noteId);
        navigate("/archives");
    };

    const onUnarchiveNote = async (noteId) => {
        await unarchiveNote(noteId);
        navigate("/");
    };

    const onDeleteNote = async (noteId) => {
        await deleteNote(noteId);
        navigate("/");
    };

    useEffect(() => {
        getNote(id).then(({ data }) => {
            setNote(data);
        });
    }, [id]);

    if (note === null) {
        return (
            <div className="loading">
                <EmptyMessage label="Loading..." />
            </div>
        );
    }

    return (
        <>
            <div className="note-detail">
                <NoteButton
                    id={id}
                    isArchived={note?.archived ?? false}
                    position="flex-end"
                    onArchiveNote={onArchiveNote}
                    onUnarchiveNote={onUnarchiveNote}
                    onDeleteNote={onDeleteNote}
                />
                <div>
                    <h2 className="detail-title">{note?.title ?? ""}</h2>
                    <p className="detail-date">{showFormattedDate(note?.createdAt ?? "", lang)}</p>
                    <div
                        className="detail-body"
                        dangerouslySetInnerHTML={{ __html: parse(note?.body ?? "") }}
                    />
                </div>
            </div>
        </>
    );
};

export default DetailNotePage;
