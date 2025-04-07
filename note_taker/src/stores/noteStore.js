import { defineStore } from 'pinia';
import { addNoteToDB, getAllNotesFromDB, deleteNoteFromDB } from '../utils/indexedDB';

export const useNoteStore = defineStore('noteStore', {
  state: () => ({
    notes: [], // Array to store notes
  }),
  actions: {
    async loadNotes() {
      // Load notes from IndexedDB
      this.notes = await getAllNotesFromDB();
    },
    async addNote(note) {
      // Ensure the note object includes all necessary fields
      const newNote = {
        id: note.id || Date.now(), // Generate a unique ID if not provided
        title: note.title,
        content: note.content,
        createdAt: note.createdAt || new Date().toLocaleString(), // Add timestamp if not provided
      };
    
      // Add the note to IndexedDB and update the state
      await addNoteToDB(newNote);
      this.notes.push(newNote);
    },
    async deleteNote(id) {
      // Delete note from IndexedDB and update state
      await deleteNoteFromDB(id);
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
});