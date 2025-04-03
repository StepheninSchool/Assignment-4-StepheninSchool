<template>
  <div>
    <h1 class="title">Your Notes</h1>
    
    <div class="field has-addons">
      <div class="control">
        <input 
          class="input" 
          v-model="newNote" 
          type="text" 
          placeholder="Enter your note"
          @keyup.enter="addNote"
        />
      </div>
      <div class="control">
        <button class="button is-primary" @click="addNote">Add Note</button>
      </div>
    </div>

    <div v-if="notes.length > 0">
      <div class="box" v-for="note in notes" :key="note.id">
        <p>{{ note.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const notes = ref([]); // Start with an empty array
const newNote = ref('');

const addNote = () => {
  if (newNote.value.trim() !== '') {
    notes.value.push({ id: notes.value.length + 1, text: newNote.value });
    newNote.value = ''; // Clear input field
  }
};
</script>
