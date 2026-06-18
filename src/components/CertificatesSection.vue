<script setup>
import { ref } from 'vue'
import { certificates } from '../data/portfolio'

const selectedCert = ref(null)

function openCert(cert) {
  selectedCert.value = cert
}

function closeCert() {
  selectedCert.value = null
}
</script>

<template>
  <section id="certificates" class="section certificates">
    <div class="container">
      <h2 class="section-title"><span class="accent">Certificates</span></h2>
      <p class="section-subtitle">Credentials and achievements</p>
      <div class="certificates-grid">
        <article
          v-for="cert in certificates"
          :key="cert.title"
          class="cert-card fade-in"
          @click="openCert(cert)"
        >
          <div class="cert-image-wrap">
            <img :src="cert.image" :alt="cert.title" class="cert-image" loading="lazy" />
            <div class="cert-overlay">
              <span>View Certificate</span>
            </div>
          </div>
          <div class="cert-body">
            <span class="cert-type">{{ cert.type }}</span>
            <h3>{{ cert.title }}</h3>
            <p class="cert-topic">{{ cert.topic }}</p>
            <div class="cert-meta">
              <span class="cert-year">{{ cert.date }}</span>
              <span class="cert-venue">{{ cert.venue }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="selectedCert" class="cert-modal" @click.self="closeCert">
        <button class="cert-modal-close" aria-label="Close" @click="closeCert">&times;</button>
        <div class="cert-modal-content">
          <img :src="selectedCert.image" :alt="selectedCert.title" />
          <div class="cert-modal-info">
            <span class="cert-type">{{ selectedCert.type }}</span>
            <h3>{{ selectedCert.title }}</h3>
            <p>{{ selectedCert.topic }}</p>
            <p class="cert-modal-meta">{{ selectedCert.institution }} · {{ selectedCert.date }}</p>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>
