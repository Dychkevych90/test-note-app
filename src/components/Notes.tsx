import {useState} from "react";

import {Note} from "@/lib/db";
import {useNotes} from "@/lib/useNotes";
import NotesForm from "@/components/notesForm";
import NoteCard from "@/components/noteCard";

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  
  const {addNote, removeNote, editNote} = useNotes({setNotes});
  
  const [isShowForm, setIsShowForm] = useState<boolean>(false)
  const [editingNote, setEditingNote] = useState<Note | null>(null);
 
  return (
    <>
      <div className="p-4 max-w-lg mx-auto border-2 border-gray-400 rounded my-2 overflow-hidden">
        <div className='w-100 flex items-center justify-between  pb-4 mb-4 border-b-2 border-gray-400'>
          <h1 className="text-2xl font-bold">Notes</h1>
          
          <button
            onClick={() => setIsShowForm(!isShowForm)}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Add Note
          </button>
        </div>
        
        <div className='max-h-[540px] overflow-auto no-scrollbar'>
          {notes.map((note: Note) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={removeNote}
              onEdit={() => {
                setEditingNote(note);
                setIsShowForm(true);
              }}
            />
          ))}
        </div>
      </div>
      
      {
        isShowForm &&
        <NotesForm
          onAddNote={addNote}
          existingNote={editingNote}
          editNote={editNote}
          onClose={() => setIsShowForm(false)}
          setEditingNote={setEditingNote}
        />
      }
    </>
  )
}

export default Notes;