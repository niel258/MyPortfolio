<script setup>
import { skills } from '../data/portfolio'
</script>

<template>
  <section id="skills" class="section skills">
    <div class="container">
      <h2 class="section-title">My <span class="accent">Skills</span></h2>
      <p class="section-subtitle">Technologies and tools I work with</p>
      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.title" class="skill-card fade-in">
          <div class="skill-icon">
            <svg v-if="skill.icon === 'monitor'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <svg v-else-if="skill.icon === 'layers'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </div>
          <h3>{{ skill.title }}</h3>
          <p>{{ skill.description }}</p>
          <div class="skill-tags">
            <span v-for="tag in skill.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
