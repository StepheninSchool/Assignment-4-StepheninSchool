import { openDB } from 'idb';

const DB_NAME = 'NotesDB';
const DB_VERSION = 1;
const STORE_NAME = 'notes';

export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
};

export const addNoteToDB = async (note) => {
  const db = await initDB();
  await db.add(STORE_NAME, note);
};

export const getAllNotesFromDB = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

export const deleteNoteFromDB = async (id) => {
  const db = await initDB();
  await db.delete(STORE_NAME, id);
};
