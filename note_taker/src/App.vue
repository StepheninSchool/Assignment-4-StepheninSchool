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
