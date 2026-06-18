<script setup>
import { profile } from '../data/portfolio'

defineProps({
  links: { type: Array, required: true },
  activeSection: { type: String, required: true },
  isScrolled: { type: Boolean, default: false },
  menuOpen: { type: Boolean, default: false },
})

defineEmits(['toggle-menu', 'close-menu'])
</script>

<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <a href="#home" class="nav-logo" @click="$emit('close-menu')">{{ profile.initials }}</a>

      <button
        class="nav-toggle"
        :class="{ open: menuOpen }"
        aria-label="Toggle navigation"
        @click="$emit('toggle-menu')"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          class="nav-link"
          :class="{ active: activeSection === link.id }"
          @click="$emit('close-menu')"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
