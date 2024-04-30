import axios from "axios";
import { useState, useEffect } from "react";
import Note from "./Note";

interface Note {
    _id: string;
    id_user: string;
    text: string;
    title: string;
    date: Date;
}

interface ListProps {
    onSelectNote: (noteId: string) => void;
}

const ListNotes: React.FC<ListProps> = ({ onSelectNote }) => {
    const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
    const [notes, setNotes] = useState<Note[]>([]);
    const id_user = localStorage.getItem('id_user');

    const fetchNotes = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/notes/search/${id_user}`);
          setNotes(response.data as Note[]);
        } catch (error) {
          console.error('Erro ao buscar notes:', error);
        }
      };

    useEffect(() => {
        fetchNotes();
    }, [fetchNotes]); 

    
    const handleSelectNote = (noteId: string) => {
        setSelectedNoteId(noteId);
        onSelectNote(noteId);
        handleFocus(); 
    };

    const handleFocus = () => {
        console.log('Note item focado');
      };

    const handleRemoveNote = async (noteId: string) => {
        try {
            await axios.delete(`http://localhost:3000/note/delete/${noteId}`);
            await fetchNotes(); 
        } catch (error) {
            console.error('Erro ao remover a nota:', error);
        }
    };

    return (
        <div className="bg-slate-600 m-2 my-4 relative rounded-md h-4/6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px]">
            {notes.map((note) => (
                <Note
                    key={note._id}
                    note={note}
                    onSelect={handleSelectNote}
                    onRemove={handleRemoveNote} 
                    selected={note._id === selectedNoteId}
                    onFocus={handleFocus} 
                />
            ))}
        </div>
    );
}

export default ListNotes;
