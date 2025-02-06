import React, {useEffect, useState, FC} from "react";
import {Note} from "@/lib/db";

interface NotesFormProps {
  onAddNote: (note: { title: string; body: string }) => void;
  existingNote: { title: string; body: string, id: string } | null;
  editNote: (id: string, note: { title: string; body: string }) => void;
  onClose: () => void;
  setEditingNote: React.Dispatch<React.SetStateAction<Note | null>>;
}

const NotesForm: FC<NotesFormProps> = ({ onAddNote, existingNote, editNote, onClose, setEditingNote }) => {
  const [note, setNote] = useState({ title: '', body: '' });
  
  useEffect(() => {
    if (existingNote) {
      setNote({ title: existingNote.title, body: existingNote.body });
    }
  }, [existingNote]);
  
  const handleSave = () => {
    if (note.title && note.body) {
      if (existingNote) {
        editNote(existingNote.id, { title: note.title, body: note.body });
        setEditingNote(null)
      } else {
        onAddNote({ title: note.title, body: note.body });
      }
      
      setNote({ title: '', body: '' });
      onClose();
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  };
  
  return (
    <div className='fixed top-0 left-0 w-full min-h-[100vh] flex items-center justify-center z-50 bg-gray-500/75 transition-opacity'>
      <div className="max-w-[500px] bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg">
        <h2 className="text-gray-900 font-bold text-xl mb-2">Create Note</h2>
        
        <input
          type="text"
          placeholder="Title"
          defaultValue={note.title}
          name='title'
          onChange={handleChange}
          className="border p-2 w-full mb-4 rounded"
        />
        
        <textarea
          placeholder="Body"
          defaultValue={note.body}
          name='body'
          onChange={handleChange}
          className="border p-2 w-full mb-2 rounded"
        />
        
        <div className='w-[100%] flex items-center justify-end'>
          <button
            onClick={handleSave}
            disabled={note.title === '' || note.body === ''}
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"> Save
          </button>
          
          <button
            onClick={() => onClose()}
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto">Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotesForm;