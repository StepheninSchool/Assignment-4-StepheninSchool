<!-- filepath: f:\Semester_4\EmergeningTechnologies\Repos\Assignment-4-StepheninSchool\note_taker\src\views\Home.vue -->
<template>
  <div class="container">
    <h1 class="title has-text-centered">Notes</h1>
    <div class="box">
      <ul>
        <li v-for="note in notes" :key="note.id" class="media">
          <div class="media-content">
            <p class="content">{{ note.content }}</p>
          </div>
          <div class="media-right">
            <button class="button is-danger is-light" @click="deleteNote(note.id)">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          v-model="newNoteContent"
          class="input"
          type="text"
          placeholder="Add a new note"
        />
      </div>
      <div class="control">
        <button class="button is-primary" @click="addNote">Add Note</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useNoteStore } from '../stores/noteStore';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const noteStore = useNoteStore();
    const { notes } = storeToRefs(noteStore); // Make notes reactive
    const newNoteContent = ref('');

    // Load notes on component mount
    onMounted(() => {
      noteStore.loadNotes();
    });

    const addNote = async () => {
      if (newNoteContent.value.trim()) {
        const newNote = {
          id: Date.now(), // Generate a unique ID
          content: newNoteContent.value,
        };
        await noteStore.addNote(newNote);
        newNoteContent.value = ''; // Clear input
      }
    };

    const deleteNote = async (id) => {
      await noteStore.deleteNote(id);
    };

    return {
      notes,
      newNoteContent,
      addNote,
      deleteNote,
    };
  },
};
</script>