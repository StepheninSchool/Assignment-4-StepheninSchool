import { openDB } from 'idb';

// Define the IndexedDB database name, version, and object store name
const DB_NAME = 'NotesDB';
const DB_VERSION = 1;
const STORE_NAME = 'notes';

// Initialize the IndexedDB database
export const initDB = async () => {
  try {
    return openDB(DB_NAME, DB_VERSION, {
      // Create the notes object store if it doesn't exist
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          // Create a new object store with an 'id' key path
          db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      },
    });
  } catch (error) {
    console.error('Failed to initialize IndexedDB:', error);
    throw error; // Re-throw the error for further handling
  }
};

// Add a note to the IndexedDB database
export const addNoteToDB = async (note) => {
  try {
    const db = await initDB();
    await db.add(STORE_NAME, note);
  } catch (error) {
    console.error('Failed to add note to IndexedDB:', error);
    throw error; // Re-throw the error for further handling
  }
};

// Get all notes from the IndexedDB database
export const getAllNotesFromDB = async () => {
  try {
    const db = await initDB();
    return await db.getAll(STORE_NAME);
  } catch (error) {
    console.error('Failed to retrieve notes from IndexedDB:', error);
    throw error; // Re-throw the error for further handling
  }
};

// Delete a note from the IndexedDB database
export const deleteNoteFromDB = async (id) => {
  try {
    const db = await initDB();
    await db.delete(STORE_NAME, id);
  } catch (error) {
    console.error('Failed to delete note from IndexedDB:', error);
    throw error; // Re-throw the error for further handling
  }

  
};