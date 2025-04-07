<template>
  <div class="container">
    <!-- Page Title -->
    <h1 class="title has-text-centered">Your Generic Notes</h1>
    
    <!-- Displaying notes as cards -->
    <div class="columns is-multiline">
      <!-- Loop through notes using v-for. Each note is rendered as a card. -->
      <div class="column is-one-third" v-for="note in notes" :key="note.id">
        <div class="card" @click="toggleExpand(note.id)">
          <div class="card-content">
            <!-- Note title and timestamp -->
            <p class="title is-4">{{ note.title }}</p>
            <p class="subtitle is-6">{{ note.createdAt }}</p>
            
            <!-- Expanded section: visible when the card is clicked -->
            <div v-if="expandedNotes[note.id]">
              <p class="content mt-2">{{ note.content }}</p>
              <div class="buttons mt-2">
                <!-- Edit button. .stop modifier prevents click propagation -->
                <button
                  class="button is-info is-light mr-2"
                  @click.stop="editNote(note)"
                >
                  Edit
                </button>
                <!-- Delete button -->
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

    <!-- Toggle New Note Form Button -->
    <div class="mt-4">
      <!-- This button only shows if the add note form is hidden -->
      <button
        v-if="!showAddForm"
        class="button is-primary"
        @click="showAddForm = true"
      >
        <!-- Icon inside the button from the public folder -->
        <img
          src="/icons/notes-svgrepo-com.svg"
          alt="New Note Icon"
          style="height: 1em; margin-right: 0.5em;"
        />
        New Note
      </button>
    </div>

    <!-- Add new note form: only visible when showAddForm is true -->
    <div v-if="showAddForm" class="box mt-4">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <!-- Two-way binding using v-model -->
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
          <!-- Textarea with two-way binding -->
          <textarea
            v-model="newNoteContent"
            class="textarea"
            placeholder="Note content"
          ></textarea>
        </div>
      </div>
      <div class="buttons">
        <!-- Button to confirm adding a note -->
        <button class="button is-success" @click="confirmAddNote">
          Add Note
        </button>
        <!-- Button to cancel adding a note -->
        <button class="button" @click="cancelAddNote">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// Import necessary functions from Vue and Pinia
import { ref, onMounted, reactive } from 'vue';
import { useNoteStore } from '../stores/noteStore';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    // Initialize the note store using Pinia
    const noteStore = useNoteStore();

    // Destructure and make the notes array reactive
    const { notes } = storeToRefs(noteStore);

    // Reactive variables for showing the add note form and input values
    const showAddForm = ref(false);
    const newNoteTitle = ref('');
    const newNoteContent = ref('');
    
    // Reactive object to keep track of which notes are expanded
    const expandedNotes = reactive({});

    // Lifecycle hook: load notes when the component is mounted
    onMounted(() => {
      noteStore.loadNotes();
    });

    // Function to confirm and add a new note
    const confirmAddNote = async () => {
  if (newNoteTitle.value.trim() && newNoteContent.value.trim()) {
    const newNote = {
      id: Date.now(), // Use current timestamp as a unique ID
      title: newNoteTitle.value,
      content: newNoteContent.value,
      createdAt: new Date().toLocaleString(), // Record the creation time
    };

    // Add the new note using the note store
    await noteStore.addNote(newNote);

    // Clear the input fields and hide the add note form
    newNoteTitle.value = '';
    newNoteContent.value = '';
    showAddForm.value = false;
  }
};

    // Function to cancel adding a new note
    const cancelAddNote = () => {
      // Clear inputs and hide the form
      newNoteTitle.value = '';
      newNoteContent.value = '';
      showAddForm.value = false;
    };

    // Function to delete a note
    const deleteNote = async (id) => {
      await noteStore.deleteNote(id);
      // Remove the expanded state for the deleted note
      delete expandedNotes[id];
    };

    // Function to edit a note
    const editNote = async (note) => {
      // Use prompt dialogs to get new title and content from the user
      const newTitle = prompt("Edit title:", note.title);
      const newContent = prompt("Edit content:", note.content);
      // Check if valid changes are made before updating
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

    // Function to toggle the expanded view of a note card
    const toggleExpand = (id) => {
      expandedNotes[id] = !expandedNotes[id];
    };

    // Return all reactive variables and functions to the template
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
