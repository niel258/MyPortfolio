<script setup>
import { education } from '../data/portfolio'
</script>

<template>
  <section id="education" class="section education">
    <div class="container">
      <h2 class="section-title"><span class="accent">Education</span></h2>
      <p class="section-subtitle">My academic background</p>
      <div class="education-list">
        <div v-for="item in education" :key="`${item.year}-${item.school}`" class="edu-card fade-in">
          <div class="edu-year">{{ item.year }}</div>
          <div class="edu-details">
            <h3>{{ item.degree }}</h3>
            <p>{{ item.school }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
