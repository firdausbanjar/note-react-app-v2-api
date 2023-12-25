import React, { useContext, useEffect, useState } from "react";
import EmptyMessage from "../components/EmptyMessage";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../contexts/LocaleContext ";
import useSearchQuery from "../hooks/useSeacrhQuery";
import { archiveNote, deleteNote, getActiveNotes } from "../utils/network-data";

const NotePage = () => {
    const [notes, setNotes] = useState([]);
    const [keyword, onChangeKeyword] = useSearchQuery("keyword");
    const { language } = useContext(LocaleContext);

    const onArchiveNote = async (noteId) => {
        await archiveNote(noteId);
        const { data } = await getActiveNotes();
        setNotes(data);
    };

    const onDeleteNote = async (noteId) => {
        await deleteNote(noteId);

        const { data } = await getActiveNotes();
        setNotes(data);
    };

    useEffect(() => {
        getActiveNotes().then(({ data }) => {
            setNotes(data);
        });
    }, []);

    if (notes === null) {
        return (
            <div className="loading">
                <EmptyMessage label="Loading..." />
            </div>
        );
    }

    const activeNotes = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));

    return (
        <section>
            <SearchBar keyword={keyword} onChangeKeyword={onChangeKeyword} />
            <div>
                <h2 className="page-title">{language === "id" ? "Daftar Catatan" : "Notes List"}</h2>
            </div>
            <NoteList
                notes={activeNotes}
                emptyMessage={language === "id" ? "Tidak ada catatan" : "No record"}
                onArchiveNote={onArchiveNote}
                onDeleteNote={onDeleteNote}
            />
        </section>
    );
};

export default NotePage;
