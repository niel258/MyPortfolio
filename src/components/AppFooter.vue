<script setup>
import { profile } from '../data/portfolio'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ new Date().getFullYear() }} {{ profile.name }}. All rights reserved.</p>
    </div>
  </footer>
</template>
