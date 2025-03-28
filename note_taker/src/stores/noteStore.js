import { defineStore } from 'pinia'

export const useNoteStore = defineStore('noteStore', {
  state: () => ({
    // An array to store all notes
    notes: []
  }),
  actions: {
    // Adds a new note to the state
    addNote(note) {
      this.notes.push(note)
    },
    // Initializes notes from IndexedDB (or any external data source)
    loadNotes(notes) {
      this.notes = notes
    },
    // Optional: Delete a note by its id
    deleteNote(id) {
      this.notes = this.notes.filter(note => note.id !== id)
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
