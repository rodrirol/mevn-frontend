<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/HomeComponent.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <Home/>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/create">Create</RouterLink>
        <RouterLink to="/posts">Posts</RouterLink>
        <RouterLink to="/edit/1">Edit</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
