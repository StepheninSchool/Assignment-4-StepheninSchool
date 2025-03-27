import { defineStore } from 'pinia';
import { ref } from 'vue';
import { addNoteToDB, getNotesFromDB } from '../db';

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([]);

  // Load notes from IndexedDB on startup
  const loadNotes = async () => {
    notes.value = await getNotesFromDB();
  };

  // Add a note to Pinia + IndexedDB
  const addNote = async (note) => {
    notes.value.push(note);
    await addNoteToDB(note);
  };

  return { notes, loadNotes, addNote };
});
