<script setup>
import { navLinks } from './data/portfolio'
import { useScrollSpy } from './composables/useScrollSpy'
import { useFadeIn } from './composables/useFadeIn'
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import CertificatesSection from './components/CertificatesSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'

const sectionIds = navLinks.map((link) => link.id)
const { activeSection, isScrolled, menuOpen, toggleMenu, closeMenu } = useScrollSpy(sectionIds)

useFadeIn()
</script>

<template>
  <AppNavbar
    :links="navLinks"
    :active-section="activeSection"
    :is-scrolled="isScrolled"
    :menu-open="menuOpen"
    @toggle-menu="toggleMenu"
    @close-menu="closeMenu"
  />

  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <CertificatesSection />
    <ExperienceSection />
    <EducationSection />
    <ContactSection />
  </main>

  <AppFooter />
</template>
