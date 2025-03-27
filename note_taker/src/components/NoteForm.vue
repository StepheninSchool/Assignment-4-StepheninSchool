<template>
    <div class="box">
      <h2 class="title is-4">Add a New Note</h2>
      
      <form @submit.prevent="submitNote">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input v-model="title" class="input" type="text" placeholder="Enter note title" required />
          </div>
        </div>
  
        <div class="field">
          <label class="label">Content</label>
          <div class="control">
            <textarea v-model="content" class="textarea" placeholder="Enter note content"></textarea>
          </div>
        </div>
  
        <div class="field">
          <div class="control">
            <button class="button is-primary" type="submit">Save</button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useNotesStore } from '../stores/useNotesStore';
  
  const title = ref('');
  const content = ref('');
  const notesStore = useNotesStore();
  
  const submitNote = async () => {
    if (!title.value.trim()) return; // Validate title
  
    const newNote = {
      id: Date.now(),
      title: title.value,
      content: content.value,
      timestamp: new Date().toISOString(),
    };
  
    await notesStore.addNote(newNote); // Save to store + IndexedDB
    title.value = '';  
    content.value = ''; 
  };
  </script>
  