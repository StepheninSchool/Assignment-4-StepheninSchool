import { defineStore } from 'pinia'

// 1. defineStore creates a "store" for your data and logic
export const useNoteStore = defineStore('noteStore', {
  state: () => ({
    notes: [
      { id: 1, text: 'Sample Note' }
    ],
    nextId: 2
  }),
  actions: {
    // 2. Add a new note with custom text
    addNote(text = 'New Note') {
      this.notes.push({
        id: this.nextId,
        text
      })
      this.nextId++
    },

    removeNote(id) {
      this.notes = this.notes.filter(note => note.id !== id)
    },
    

    getAllNotes() {
      return this.notes
    }
  }
})
// 3. Now you can import this store in components and use it