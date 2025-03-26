<template>
  <div>
    <div v-if="notes.length === 0" class="notification is-warning">
      No notes yet.
    </div>
    <div v-else>
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="note in notes" :key="note.id">
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
            <!-- Future enhancements: Add edit/delete buttons here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNoteStore } from '../stores/noteStore';
import { storeToRefs } from 'pinia';

const noteStore = useNoteStore();
const { notes } = storeToRefs(noteStore);
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
