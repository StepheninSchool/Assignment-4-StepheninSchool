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
    await db.put(STORE_NAME, note); // Use `put` instead of `add` to allow updates
  } catch (error) {
    console.error('Failed to add or update note in IndexedDB:', error);
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

export const editNote = async (note) => {
    // Use prompt dialogs to get new title and content from the user
    const newTitle = prompt("Edit title:", note.title);
    const newContent = prompt("Edit content:", note.content);
  
    // Check if valid changes are made before updating
    if (
      newTitle &&
      newTitle.trim() !== "" &&
      newContent &&
      newContent.trim() !== "" &&
      (newTitle !== note.title || newContent !== note.content)
    ) {
      const updatedNote = { ...note, title: newTitle, content: newContent };
  
      // Call the store's editNote method to persist the changes
      await noteStore.editNote(updatedNote);
    }
  };
