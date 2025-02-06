import React, {useEffect, useState} from "react";

import {initDB, Note} from "@/lib/db";

export function useNotes({ setNotes }: { setNotes: React.Dispatch<React.SetStateAction<Note[]>> }) {
  const [db, setDb] = useState<any>(null);
  
  useEffect(() => {
    const getNotes = async () => {
      const database = await initDB();
      setDb(database);
      
      const localNotes = await database.notes.find().exec();
      
      if(localNotes.length === 0) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const formattedData = data.slice(0, 5).map((note: Note) => ({
          ...note,
          id: String(note.id),
          userId: String(note.userId),
        }));
       
        await database.notes.bulkInsert(formattedData);
      }
        setNotes(localNotes);
    }
    
    void getNotes();
  }, [])
  
  const editNote = async (id: string, note: { title: string; body: string }) => {
    if (!db) return;
    
    try {
      const findNote = await db.notes.findOne(id).exec();
      
      if (findNote) {
        await findNote.patch({
          title: note.title,
          body: note.body,
        });
        
        setNotes(await db.notes.find().exec());
      }
    } catch (e) {
      console.error("Error updating note:", e);
    }
  };
  
  const addNote = async (note: { title: string; body: string }) => {
    if (!db) {
      console.error("Database not initialized");
      return;
    }
    
    const newNote = { ...note, id: crypto.randomUUID(), userId: '1' };
    
    try {
      await db.notes.insert(newNote);
      
      if(newNote) setNotes( await db.notes.find().exec());
    } catch (e) {
      console.error(e)
    }
  };
  
  const removeNote = async (id: string) => {
    if (!db) return;
    
    const note = await db.notes.findOne(id).exec();
    
    if (note) {
      await note.remove();
      setNotes(await db.notes.find().exec());
    }
  };
  
  return { removeNote, addNote, editNote}
}