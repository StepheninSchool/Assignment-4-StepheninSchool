<template>
  <div class="container">
    <h1 class="title has-text-centered">Notes</h1>
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="note in notes" :key="note.id">
        <div class="card" @click="toggleExpand(note.id)">
          <div class="card-content">
            <p class="title is-4">{{ note.title }}</p>
            <p class="subtitle is-6">{{ note.createdAt }}</p>
            <div v-if="expandedNotes[note.id]">
              <p class="content mt-2">{{ note.content }}</p>
              <div class="buttons mt-2">
                <button
                  class="button is-info is-light mr-2"
                  @click.stop="editNote(note)"
                >
                  Edit
                </button>
                <button
                  class="button is-danger is-light"
                  @click.stop="deleteNote(note.id)"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toggle New Note Form -->
    <div class="mt-4">
      <button
        v-if="!showAddForm"
        class="button is-primary"
        @click="showAddForm = true"
      >
        <img
          src="/icons/notes-svgrepo-com.svg"
          alt="New Note Icon"
          style="height: 1em; margin-right: 0.5em;"
        />
        New Note
      </button>
    </div>

    <!-- Add new note form appears when showAddForm is true -->
    <div v-if="showAddForm" class="box mt-4">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            v-model="newNoteTitle"
            class="input"
            type="text"
            placeholder="Note title"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea
            v-model="newNoteContent"
            class="textarea"
            placeholder="Note content"
          ></textarea>
        </div>
      </div>
      <div class="buttons">
        <button class="button is-success" @click="confirmAddNote">
          Add Note
        </button>
        <button class="button" @click="cancelAddNote">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue';
import { useNoteStore } from '../stores/noteStore';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const noteStore = useNoteStore();
    const { notes } = storeToRefs(noteStore); // Make notes reactive

    const showAddForm = ref(false);
    const newNoteTitle = ref('');
    const newNoteContent = ref('');
    const expandedNotes = reactive({});

    // Load notes on component mount
    onMounted(() => {
      noteStore.loadNotes();
    });

    const confirmAddNote = async () => {
      if (newNoteTitle.value.trim() && newNoteContent.value.trim()) {
        const newNote = {
          id: Date.now(), // Generate a unique ID
          title: newNoteTitle.value,
          content: newNoteContent.value,
          createdAt: new Date().toLocaleString(), // Add timestamp
        };
        await noteStore.addNote(newNote);
        // Clear inputs and hide the form
        newNoteTitle.value = '';
        newNoteContent.value = '';
        showAddForm.value = false;
      }
    };

    const cancelAddNote = () => {
      // Clear inputs and hide the form
      newNoteTitle.value = '';
      newNoteContent.value = '';
      showAddForm.value = false;
    };

    const deleteNote = async (id) => {
      await noteStore.deleteNote(id);
      // Remove expanded state for the deleted note
      delete expandedNotes[id];
    };

    const editNote = async (note) => {
      const newTitle = prompt("Edit title:", note.title);
      const newContent = prompt("Edit content:", note.content);
      if (
        newTitle &&
        newTitle.trim() !== "" &&
        newContent &&
        newContent.trim() !== "" &&
        (newTitle !== note.title || newContent !== note.content)
      ) {
        const updatedNote = { ...note, title: newTitle, content: newContent };
        await noteStore.editNote(updatedNote);
      }
    };

    const toggleExpand = (id) => {
      expandedNotes[id] = !expandedNotes[id];
    };

    return {
      notes,
      showAddForm,
      newNoteTitle,
      newNoteContent,
      confirmAddNote,
      cancelAddNote,
      deleteNote,
      editNote,
      expandedNotes,
      toggleExpand,
    };
  },
};
</script>
