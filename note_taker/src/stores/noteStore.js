import { defineStore } from 'pinia';
import { addNoteToDB, getAllNotesFromDB, deleteNoteFromDB } from '../utils/indexedDB';

export const useNoteStore = defineStore('noteStore', {
  state: () => ({
    notes: [], // Array to store notes
  }),
  actions: {
    async loadNotes() {
      // Load notes from IndexedDB
      const loadedNotes = await getAllNotesFromDB();
    
      // Assign a random color to notes that don't already have one
      this.notes = loadedNotes.map((note) => ({
        ...note,
        color: note.color || `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      }));
    },
    async addNote(note) {
      // Generate a random color
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
      // Ensure the note object includes all necessary fields
      const newNote = {
        id: note.id || Date.now(), // Generate a unique ID if not provided
        title: note.title,
        content: note.content,
        createdAt: note.createdAt || new Date().toLocaleString(), // Add timestamp if not provided
        color: randomColor, // Assign a random color
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
    async editNote(updatedNote) {
      // Update the note in IndexedDB
      await addNoteToDB(updatedNote); // `addNoteToDB` will overwrite the note with the same `id`
    
      // Update the note in the local state
      const index = this.notes.findIndex((note) => note.id === updatedNote.id);
      if (index !== -1) {
        this.notes[index] = updatedNote;
      }
    },
  },
});