<template>
  <form @submit.prevent="handleSubmit" class="box">
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="title"
          placeholder="Enter note title"
          required
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Content</label>
      <div class="control">
        <textarea
          class="textarea"
          v-model="content"
          placeholder="Enter note content"
          required
        ></textarea>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <button class="button is-primary" type="submit">Save</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const content = ref('');

const handleSubmit = () => {
  if (title.value.trim() && content.value.trim()) {
    const newNote = {
      id: Date.now(),
      title: title.value,
      content: content.value,
    };
    // Emit the new note to the parent component
    emit('save-note', newNote);

    // Clear the form fields
    title.value = '';
    content.value = '';
  }
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
