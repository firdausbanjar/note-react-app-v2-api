import React, { useContext } from "react";
import NoteInput from "../components/NoteInput";
import LocaleContext from "../contexts/LocaleContext ";

const AddNotePage = () => {
    const { language } = useContext(LocaleContext);
    return (
        <section>
            <h2 className="page-title">{language === "id" ? "Tambah Catatan" : "Add Note"}</h2>
            <NoteInput />
        </section>
    );
};

export default AddNotePage;
