<script setup>
import { profile, aboutParagraphs } from '../data/portfolio'

const infoCards = [
  { label: 'Name', value: profile.name },
  { label: 'Location', value: profile.location },
  { label: 'Email', value: profile.email },
  { label: 'Phone', value: profile.phone },
]
</script>

<template>
  <section id="about" class="section about">
    <div class="container">
      <h2 class="section-title">About <span class="accent">Me</span></h2>
      <div class="about-grid fade-in">
        <div class="about-image-col">
          <img :src="profile.photo" :alt="profile.name" class="about-image" />
        </div>
        <div class="about-text-col">
          <h3>Who I Am</h3>
          <p v-for="(paragraph, index) in aboutParagraphs" :key="index">{{ paragraph }}</p>
          <div class="about-info-cards">
            <div v-for="card in infoCards" :key="card.label" class="info-card">
              <span class="info-label">{{ card.label }}</span>
              <span class="info-value">{{ card.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
