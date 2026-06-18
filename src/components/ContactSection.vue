<script setup>
import { ref } from 'vue'
import { profile } from '../data/portfolio'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

function handleSubmit() {
  const { name, email, subject, message } = form.value
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  )}`
  window.location.href = mailto
  form.value = { name: '', email: '', subject: '', message: '' }
}
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <h2 class="section-title">Get In <span class="accent">Touch</span></h2>
      <p class="section-subtitle">Feel free to reach out for collaborations or opportunities</p>
      <div class="contact-grid fade-in">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <span class="contact-label">Email</span>
              <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div>
              <span class="contact-label">Phone</span>
              <a :href="`tel:${profile.phoneLink}`">{{ profile.phone }}</a>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <span class="contact-label">Address</span>
              <span>{{ profile.address }}</span>
            </div>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <input v-model="form.name" type="text" placeholder="Your Name" required />
          </div>
          <div class="form-group">
            <input v-model="form.email" type="email" placeholder="Your Email" required />
          </div>
          <div class="form-group">
            <input v-model="form.subject" type="text" placeholder="Subject" required />
          </div>
          <div class="form-group">
            <textarea v-model="form.message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-full">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>
