<template>
  <div>
    <h1 class="title">Your Notes</h1>
    <button class="button is-primary" @click="addNote">➕ Add Note</button>

    <div class="box" v-for="note in notes" :key="note.id">
      <p>{{ note.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const notes = ref([{ id: 1, text: 'Sample Note' }]);

const addNote = () => {
  notes.value.push({ id: notes.value.length + 1, text: 'New Note' });
};
</script>
