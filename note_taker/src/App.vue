<template>
  <nav class="navbar is-primary is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/icons/notes-svgrepo-com.svg" alt="Notes Icon" style="height: 2rem; margin-right: 0.5rem;" />
        <span class="has-text-black">GNT: Generic Note Taker</span>
      </a>
    </div>
  </nav>

  <section class="section" style="margin-top: 3.25rem;">
    <div class="container">
      <router-view />
    </div>
  </section>
</template>

<script setup>
</script>

<style>
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
</style>