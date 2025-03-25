
<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">
    <nav class="navbar is-primary">
      <div class="navbar-brand">
        <a class="navbar-item has-text-white" href="/">📒 Note Taker</a>
      </div>
    </nav>

    <section class="section">
      <div class="container">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style>
body {
  background-color:rgb(15, 1, 1);
}
</style>
