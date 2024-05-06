import { useState } from "react";
import axios from "axios";

interface NoteItemProps {
    note: {
        _id: string,
        id_user: string,
        text: string,
        title: string,
        date: Date,
    };
    onRemove: (noteId: string) => Promise<void>; // Atualizado para incluir um argumento noteId
    onSelect: (noteId: string) => void;
    onFocus: () => void;
    selected: boolean;
}

const Note: React.FC<NoteItemProps> = ({ note, onRemove, onSelect, onFocus, selected }) => {
    const [title, setTitle] = useState(note.title);
    const [text, setText] = useState(note.text);

    const handleTitleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = event.target.value;
        const newText = event.target.value;
                setTitle(newTitle);

        try {
            await axios.put(`http://localhost:3000/note/update/${note._id}`, { title: newTitle, text: newText });
        } catch (error) {
            console.error('Erro ao atualizar título da nota:', error);
        }
    };

    const handleTextChange = async (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.target.value;
        setText(newText);

        try {
            await axios.put(`http://localhost:3000/note/update/${note._id}`, { text: newText });
        } catch (error) {
            console.error('Erro ao atualizar texto da nota:', error);
        }
    };

    const handleNoteClick = () => {
        onSelect(note._id); // Notify the List that this note was selected
        onFocus(); // Notify that the note has been focused
    };

    const handleRemoveClick = async () => {
        try {
            await onRemove(note._id); // Passando o ID da nota para a função onRemove
        } catch (error) {
            console.error('Erro ao remover nota:', error);
        }
    };

    return (
        <div className="bg-slate-500 h-5/6 w-11/12 m-2 rounded-md text-white">
            <input
                type="text"
                className="w-9/12 h-1/6 bg-slate-900 rounded-md m-2 text-white text-center relative"
                value={title}
                onChange={handleTitleChange}
                onFocus={(event) => {
                    event.stopPropagation();
                    onFocus(); // Call onFocus when the input field is focused
                }}
            />
            <button className="bg-slate-900 rounded-md m-2 p-1 text-white w-1/12 h-1/6" onClick={handleRemoveClick}>-</button>
            <textarea
                className="w-11/12 h-4/6 border-none m-2 bg-slate-500 text-white rounded-md relative"
                value={text}
                onChange={handleTextChange}
                onFocus={(event) => {
                    event.stopPropagation();
                    onFocus(); // Call onFocus when the textarea is focused
                }}
                style={{ resize: 'none' }}
            />
        </div>
    );
}

export default Note;
