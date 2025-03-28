import { openDB } from 'idb';

// Define the IndexedDB database name, version, and object store name
const DB_NAME = 'NotesDB';
const DB_VERSION = 1;
const STORE_NAME = 'notes';

// Initialize the IndexedDB database
export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    // Create the notes object store if it doesn't exist
    upgrade(db) {
      // Create a new object store if it doesn't exist
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        // Create a new object store with an 'id' key path
        // The 'id' key path will be used to uniquely identify each note
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
};
// Add a note to the IndexedDB database
export const addNoteToDB = async (note) => {
  const db = await initDB();
  await db.add(STORE_NAME, note);
};
// Get all notes from the IndexedDB database
export const getAllNotesFromDB = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};
// Delete a note from the IndexedDB database
export const deleteNoteFromDB = async (id) => {
  const db = await initDB();
  await db.delete(STORE_NAME, id);
};
