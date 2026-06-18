import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sectionIds) {
  const activeSection = ref('home')
  const isScrolled = ref(false)
  const menuOpen = ref(false)

  function updateActiveSection() {
    isScrolled.value = window.scrollY > 50

    for (const id of [...sectionIds].reverse()) {
      const el = document.getElementById(id)
      if (el && window.scrollY >= el.offsetTop - 100) {
        activeSection.value = id
        return
      }
    }
    activeSection.value = 'home'
  }

  function toggleMenu() {
    menuOpen.value = !menuOpen.value
  }

  function closeMenu() {
    menuOpen.value = false
  }

  onMounted(() => {
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    updateActiveSection()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
  })

  return { activeSection, isScrolled, menuOpen, toggleMenu, closeMenu }
}
