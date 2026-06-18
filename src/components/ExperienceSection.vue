<script setup>
import { experience } from '../data/portfolio'
</script>

<template>
  <section id="experience" class="section experience">
    <div class="container">
      <h2 class="section-title"><span class="accent">Experience</span></h2>
      <p class="section-subtitle">My professional journey</p>
      <div class="timeline">
        <div v-for="item in experience" :key="item.title" class="timeline-item fade-in">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">{{ item.date }}</span>
            <h3>{{ item.title }}</h3>
            <p class="timeline-org">{{ item.organization }}</p>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
