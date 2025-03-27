<template>
    <div>
      <h2 class="title is-4">Your Notes</h2>
  
      <div v-if="notesStore.notes.length === 0" class="notification is-warning">
        No notes yet.
      </div>
  
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="note in notesStore.notes" :key="note.id">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">{{ note.title }}</p>
            </header>
            <div class="card-content">
              <div class="content">
                {{ note.content }}
                <br />
                <time v-if="note.timestamp">{{ new Date(note.timestamp).toLocaleString() }}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useNotesStore } from '../stores/useNotesStore';
  
  const notesStore = useNotesStore();
  notesStore.loadNotes(); // Load saved notes on app start
  </script>
  