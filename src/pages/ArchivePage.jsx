import React, { useContext, useEffect, useState } from "react";
import EmptyMessage from "../components/EmptyMessage";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../contexts/LocaleContext ";
import useSearchQuery from "../hooks/useSeacrhQuery";
import { deleteNote, getArchivedNotes, unarchiveNote } from "../utils/network-data";

const ArchivePage = () => {
    const [archives, setArchives] = useState([]);
    const [keyword, onChangeKeyword] = useSearchQuery("keyword");
    const { language } = useContext(LocaleContext);

    const onUnarchiveNote = async (noteId) => {
        await unarchiveNote(noteId);
        const { data } = await getArchivedNotes();
        setArchives(data);
    };

    const onDeleteNote = async (noteId) => {
        await deleteNote(noteId);
        const { data } = await getArchivedNotes();
        setArchives(data);
    };

    useEffect(() => {
        getArchivedNotes().then(({ data }) => {
            setArchives(data);
        });
    }, []);

    if (archives === null) {
        return (
            <div className="loading">
                <EmptyMessage label="Loading..." />
            </div>
        );
    }

    const archivedNotes = archives.filter((archive) =>
        archive.title.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
        <section>
            <SearchBar keyword={keyword} onChangeKeyword={onChangeKeyword} />
            <div>
                <h2 className="page-title">{language === "id" ? "Daftar Arsip" : "Archive List"}</h2>
            </div>
            <NoteList
                notes={archivedNotes}
                emptyMessage={language === "id" ? "Tidak ada arsip" : "No archive"}
                onUnarchiveNote={onUnarchiveNote}
                onDeleteNote={onDeleteNote}
            />
        </section>
    );
};

export default ArchivePage;
