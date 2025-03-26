<!-- src/views/HelloWorld.vue -->
<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">Your Notes</h1>
      
      <!-- Field to enter new note text -->
      <div class="field has-addons">
        <div class="control is-expanded">
          <input
            class="input"
            type="text"
            placeholder="Enter your note..."
            v-model="newNoteText"
          />
        </div>
        <div class="control">
          <button class="button is-info" @click="handleAddNote">
            Add Note
          </button>
        </div>
      </div>

      <!-- Display notes in columns -->
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="note in noteStore.notes" :key="note.id">
          <div class="card">
            <div class="card-content">
              <div class="content">
                {{ note.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useNoteStore } from '../stores/noteStore'

// 1. Access the store
const noteStore = useNoteStore()

// 2. Local state for the new note text
const newNoteText = ref('')

// 3. Method to add a note to the store
const handleAddNote = () => {
  if (newNoteText.value.trim()) {
    noteStore.addNote(newNoteText.value)
    newNoteText.value = ''
  }
}
</script>
