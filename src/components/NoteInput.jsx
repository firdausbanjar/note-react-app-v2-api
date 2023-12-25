import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext ";
import useContent from "../hooks/useContent";
import useInput from "../hooks/useInput";
import { addNote } from "../utils/network-data";
import Input from "./Input";

const NoteInput = () => {
    const navigate = useNavigate();
    const [title, onChangeTitle] = useInput("");
    const [body, onChangeBody] = useContent("");
    const { language } = useContext(LocaleContext);

    const onSubmitEventHandler = async (event) => {
        event.preventDefault();
        await addNote({ title, body });
        navigate("/");
    };

    return (
        <form className="note-input neumorphism-flat" onSubmit={onSubmitEventHandler}>
            <Input
                label={language === "id" ? "Judul Catatan" : "Note Title"}
                type="text"
                value={title}
                className="input-title neumorphism-pressed"
                onChange={onChangeTitle}
            />
            <div className="input-group">
                <label>{language === "id" ? "Isi Catatan" : "Note Content"}</label>
                <div className="input-body neumorphism-pressed" contentEditable onInput={onChangeBody} />
            </div>
            <div className="input-btn">
                <button className="btn submit-btn" type="submit">
                    {language === "id" ? "Simpan" : "Save"}
                </button>
            </div>
        </form>
    );
};

export default NoteInput;
