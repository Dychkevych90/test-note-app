import React from "react";

interface Note {
  id: string;
  title: string;
  body: string;
}

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
  onEdit: (note: Note) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete, onEdit }) => {
  return (
    <div className="rounded overflow-hidden shadow-md p-2 mb-4 border">
      <h2 className="text-gray-900 font-bold text-xl mb-2">{note.title}</h2>
      <p className='text-gray-700 text-base'>{note.body}</p>
      
      <div className='w-100 flex items-center justify-end mt-4'>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 transition-all font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded mr-2"
          onClick={() => onEdit(note)}
        >
          Edit
        </button>
        
        <button onClick={() => onDelete(note.id)}
                className="bg-red-500 hover:bg-red-300 transition-all font-semibold hover:text-white text-white py-1 px-2 border border-red-500 hover:border-transparent rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
