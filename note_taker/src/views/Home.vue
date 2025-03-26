<template>
  <div>
    <h1 class="title">Your Notes</h1>
    <button class="button is-primary" @click="addNote">Add Note</button>

    <div class="box" v-for="note in notes" :key="note.id">
      <p>{{ note.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useNoteStore } from '../stores/noteStore';
import { storeToRefs } from 'pinia';

const noteStore = useNoteStore();
const { notes } = storeToRefs(noteStore); // Bind notes from the store

const addNote = async () => {
  const newNote = { id: Date.now(), text: 'New Note' };
  await noteStore.addNote(newNote); // Save the note to the database
};

onMounted(async () => {
  await noteStore.loadNotes(); // Load notes from the database on page load
});
</script>