<template>
  <nav
    class="navbar navbar-expand-lg fixed-top"
    :class="{ 'is-scrolled': isScrolled }"
  >
    <!-- Progress Bar -->
    <div class="nav-progress">
      <div class="nav-progress-bar" :style="{ width: scrollProgress + '%' }"></div>
    </div>

    <div class="container">
      <!-- Brand -->
      <a class="nav-brand" href="#home">
        <span class="brand-dot"></span>
        Rith<span class="brand-accent">.</span>
      </a>

      <!-- Mobile Toggle -->
      <button
        class="nav-toggle"
        :class="{ active: mobileOpen }"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Nav Links -->
      <div class="nav-collapse" :class="{ show: mobileOpen }">
        <ul class="nav-list">
          <li v-for="item in menu" :key="item.id" class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeSection === item.id }"
              :href="`#${item.id}`"
              @click="mobileOpen = false"
            >
              <span class="nav-link-text">{{ item.label }}</span>
              <span class="nav-link-indicator"></span>
            </a>
          </li>
        </ul>

        <!-- CTA Button -->
        <a href="#contact" class="nav-cta" @click="mobileOpen = false">
          <span>Let's Talk</span>
          <i class="fas fa-arrow-right"></i>
        </a>
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
const mobileOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  scrollProgress.value = (winScroll / height) * 100;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1050;
  padding: 1.25rem 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar.is-scrolled {
  padding: 0.75rem 0;
  background: rgba(3, 7, 18, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

/* Progress Bar */
.nav-progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: transparent;
  overflow: hidden;
}

.nav-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
  box-shadow: 0 0 12px var(--primary-glow);
  width: 0;
  transition: width 0.15s ease;
}

/* Brand */
.nav-brand {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -0.02em;
}

.brand-dot {
  width: 8px;
  height: 8px;
  background: var(--primary);
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 12px var(--primary-glow);
  animation: dotPulse 2s ease-in-out infinite;
}

.brand-accent {
  color: var(--primary);
}

@keyframes dotPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.8); }
}

/* Nav List */
.nav-list {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  position: relative;
  padding: 0.5rem 1rem;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-link-text {
  position: relative;
  z-index: 1;
}

.nav-link-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--primary);
  border-radius: 2px;
  transition: width 0.3s ease;
  box-shadow: 0 0 8px var(--primary-glow);
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link:hover .nav-link-indicator {
  width: 60%;
}

.nav-link.active {
  color: var(--primary-light);
}

.nav-link.active .nav-link-indicator {
  width: 60%;
}

/* CTA */
.nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.25rem;
  background: var(--primary);
  color: white;
  border-radius: var(--radius-md);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  margin-left: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px var(--primary-glow);
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--primary-glow);
  color: white;
}

.nav-cta i {
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

.nav-cta:hover i {
  transform: translateX(3px);
}

/* Mobile Toggle */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 1060;
}

.nav-toggle span {
  width: 24px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.nav-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Nav Collapse */
.nav-collapse {
  display: flex;
  align-items: center;
}

@media (max-width: 991px) {
  .nav-toggle {
    display: flex;
  }

  .nav-collapse {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: rgba(3, 7, 18, 0.97);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-left: 1px solid var(--glass-border);
  }

  .nav-collapse.show {
    right: 0;
  }

  .nav-list {
    flex-direction: column;
    gap: 0.75rem;
  }

  .nav-link {
    font-size: 1.1rem;
    padding: 0.75rem 1.5rem;
  }

  .nav-cta {
    margin-left: 0;
    margin-top: 1rem;
  }
}
</style>