import { defineStore } from 'pinia'
import { addNoteToDB, getAllNotesFromDB, deleteNoteFromDB } from '../utils/indexedDB';

export const useNoteStore = defineStore('noteStore', {
  state: () => ({
    notes: []
  }),
  actions: {
    async addNote(note) {
      this.notes.push(note);
      await addNoteToDB(note);
    },
    async loadNotes() {
      const notes = await getAllNotesFromDB();
      this.notes = notes;
    },
    async deleteNote(id) {
      this.notes = this.notes.filter(note => note.id !== id);
      await deleteNoteFromDB(id);
    },
    // Optional: Update a note by merging new data into the existing note
    updateNote(id, data) {
      const index = this.notes.findIndex(note => note.id === id)
      if (index !== -1) {
        this.notes[index] = { ...this.notes[index], ...data }
      }
    }
  },
  getters: {
    // Optional: Returns notes in reverse order (e.g., for reverse chronological display)
    reversedNotes(state) {
      return state.notes.slice().reverse()
    }
  }
})
