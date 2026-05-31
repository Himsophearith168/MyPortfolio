<template>
  <nav 
    class="navbar navbar-expand-lg navbar-blur fixed-top"
    :class="{ 'scrolled': isScrolled }"
  >
    <!-- Progress Bar -->
    <div class="scroll-progress-container">
      <div class="scroll-progress-bar" :style="{ width: scrollProgress + '%' }"></div>
    </div>
    
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">Rith .</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-for="item in menu" :key="item.id" class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeSection === item.id }"
              :href="`#${item.id}`"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useScrollSpy } from "@/composables/useScrollSpy";

const menu = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const { activeSection } = useScrollSpy(menu.map((item) => item.id));

const isScrolled = ref(false);
const scrollProgress = ref(0);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  scrollProgress.value = (winScroll / height) * 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar-blur {
  background: rgba(3, 7, 18, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 1.25rem 0;
}

.navbar-blur.scrolled {
  padding: 0.75rem 0;
  background: rgba(3, 7, 18, 0.8);
}

.scroll-progress-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: transparent;
}

.scroll-progress-bar {
  height: 100%;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  box-shadow: 0 0 10px var(--primary-glow);
  width: 0;
  transition: width 0.1s ease;
}

.navbar-blur .navbar-brand {
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  letter-spacing: -0.02em;
}

.navbar .nav-link {
  position: relative;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.navbar .nav-link:hover {
  color: #ffffff;
}

.navbar .nav-link.active {
  color: var(--primary);
}

.navbar .nav-link.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 1rem;
  right: 1rem;
  height: 2px;
  background: var(--primary);
  box-shadow: 0 0 10px var(--primary-glow);
  border-radius: 2px;
}

.navbar-toggler {
  border: none;
  padding: 0;
}

.navbar-toggler:focus {
  box-shadow: none;
}
</style>
