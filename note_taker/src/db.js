import { openDB } from 'idb';

// Initialize IndexedDB
const dbPromise = openDB('note_taker', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('notes')) {
      db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
    }
  },
});

// Function to add a note
export async function addNoteToDB(note) {
  const db = await dbPromise;
  await db.add('notes', note);
}

// Function to fetch all notes
export async function getNotesFromDB() {
  const db = await dbPromise;
  return await db.getAll('notes');
}
