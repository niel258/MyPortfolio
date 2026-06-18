<script setup>
import { ref } from 'vue'
import { projects } from '../data/portfolio'

const selectedProject = ref(null)
const activeImageIndex = ref(0)

function openProject(project) {
  if (project.images?.length) {
    selectedProject.value = project
    activeImageIndex.value = 0
  }
}

function closeProject() {
  selectedProject.value = null
}
</script>

<template>
  <section id="projects" class="section projects">
    <div class="container">
      <h2 class="section-title">My <span class="accent">Projects</span></h2>
      <p class="section-subtitle">A selection of work I've built and designed</p>

      <div class="projects-list">
        <article
          v-for="project in projects"
          :key="project.title"
          class="project-card fade-in"
          :class="{ 'project-featured': project.featured }"
          @click="project.images ? openProject(project) : null"
        >
          <div v-if="project.images" class="project-gallery">
            <img
              :src="project.images[0].src"
              :alt="project.title"
              class="project-preview"
              loading="lazy"
            />
            <div v-if="project.images.length > 1" class="project-thumb-row">
              <img
                v-for="(img, i) in project.images.slice(1)"
                :key="img.src"
                :src="img.src"
                :alt="img.caption"
                loading="lazy"
              />
            </div>
            <div class="project-overlay">
              <span>View Project</span>
            </div>
          </div>

          <div class="project-body">
            <span v-if="project.subtitle" class="project-subtitle">{{ project.subtitle }}</span>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="selectedProject" class="project-modal" @click.self="closeProject">
        <button class="project-modal-close" aria-label="Close" @click="closeProject">&times;</button>
        <div class="project-modal-content">
          <div class="project-modal-gallery">
            <img
              :src="selectedProject.images[activeImageIndex].src"
              :alt="selectedProject.images[activeImageIndex].caption"
            />
            <div class="project-modal-thumbs">
              <button
                v-for="(img, i) in selectedProject.images"
                :key="img.src"
                :class="{ active: activeImageIndex === i }"
                @click="activeImageIndex = i"
              >
                <img :src="img.src" :alt="img.caption" />
              </button>
            </div>
            <p class="project-modal-caption">{{ selectedProject.images[activeImageIndex].caption }}</p>
          </div>
          <div class="project-modal-info">
            <h3>{{ selectedProject.title }}</h3>
            <p v-if="selectedProject.subtitle" class="project-modal-subtitle">{{ selectedProject.subtitle }}</p>
            <p class="project-modal-desc">{{ selectedProject.fullDescription }}</p>
            <div class="project-tags">
              <span v-for="tag in selectedProject.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>
