<template>
  <div id="app">
    <nav class="navbar is-primary is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item has-text-white" href="/">📒 Note Taker</a>
      </div>
    </nav>

    <section class="section">
      <div class="container">
        <NoteForm @add-note="notesStore.addNote" />
        <NoteList />
      </div>
    </section>
  </div>
</template>

<script setup>
import NoteForm from './components/NoteForm.vue';
import NoteList from './components/NoteList.vue';
import { useNotesStore } from './stores/useNotesStore';

const notesStore = useNotesStore();
notesStore.loadNotes();
</script>
