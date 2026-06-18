<script setup>
import { profile } from '../data/portfolio'
</script>

<template>
  <section id="home" class="section hero">
    <div class="hero-content">
      <div class="hero-text">
        <p class="hero-greeting">Hello, I'm</p>
        <h1 class="hero-name">{{ profile.name }}</h1>
        <p class="hero-title">{{ profile.title }}</p>
        <p class="hero-subtitle">{{ profile.subtitle }}</p>
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">View My Work</a>
          <a href="#contact" class="btn btn-outline">Get In Touch</a>
        </div>
      </div>
      <div class="hero-image-wrapper">
        <div class="hero-image-ring"></div>
        <img :src="profile.photo" :alt="profile.name" class="hero-image" />
      </div>
    </div>
    <a href="#about" class="scroll-indicator" aria-label="Scroll down">
      <span></span>
    </a>
  </section>
</template>
