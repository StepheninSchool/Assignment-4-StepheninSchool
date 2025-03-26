<template>
  <nav class="navbar is-primary is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item has-text-white" href="/">📒 Note Taker</a>
    </div>
  </nav>

  <!-- Add top margin to avoid content sliding under the fixed navbar -->
  <section class="section" style="margin-top: 3.25rem;">
    <div class="container">
      <router-view />
    </div>
  </section>
</template>

<script setup>
</script>

<style>
body {
  background-color:rgb(15, 1, 1);
}
</style>