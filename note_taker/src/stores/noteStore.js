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
      // Add note to IndexedDB and update state
      await addNoteToDB(note);
      this.notes.push(note);
    },
    async deleteNote(id) {
      // Delete note from IndexedDB and update state
      await deleteNoteFromDB(id);
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
});