<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./sections/Hero.vue";
import About from "./sections/About.vue";
import Skills from "./sections/Skills.vue";
import Projects from "./sections/Projects.vue";
import Contact from "./sections/Contact.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="app-wrapper">
    <!-- Noise Texture Overlay -->
    <div class="noise-overlay"></div>

    <!-- Ambient Background Orbs -->
    <div class="ambient-orbs">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />

    <!-- Back to Top -->
    <Transition name="fade-up">
      <button
        v-if="showBackToTop"
        class="back-to-top"
        @click="scrollToTop"
        aria-label="Back to top"
      >
        <i class="fas fa-arrow-up"></i>
      </button>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBackToTop: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showBackToTop = window.scrollY > 600;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

/* ========================
   CSS Custom Properties
======================== */
:root {
  --bg-dark: #030712;
  --bg-dark-2: #0a0f1e;
  --primary: #3b82f6;
  --primary-light: #60a5fa;
  --primary-dark: #2563eb;
  --secondary: #a855f7;
  --secondary-light: #c084fc;
  --accent: #06b6d4;
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;

  --text-primary: #ffffff;
  --text-secondary: #cbd5e1;
  --text-muted: #64748b;

  --glass-bg: rgba(255, 255, 255, 0.03);
  --glass-bg-hover: rgba(255, 255, 255, 0.06);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-border-hover: rgba(255, 255, 255, 0.15);

  --primary-glow: rgba(59, 130, 246, 0.15);
  --secondary-glow: rgba(168, 85, 247, 0.15);

  --font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-heading: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;

  --shadow-sm: 0 2px 8px rgba(0,0,0,0.2);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.3);
  --shadow-lg: 0 16px 48px rgba(0,0,0,0.4);
}

/* ========================
   Base & Reset
======================== */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  font-family: var(--font-body);
  background-color: var(--bg-dark);
  color: var(--text-secondary);
  line-height: 1.625;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

::selection {
  background: var(--primary);
  color: white;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--bg-dark);
}

::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255,255,255,0.2);
}

/* ========================
   App Wrapper
======================== */
.app-wrapper {
  position: relative;
  min-height: 100vh;
}

/* Noise Overlay */
.noise-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* Ambient Orbs */
.ambient-orbs {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  animation: orbFloat 20s ease-in-out infinite;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: rgba(59, 130, 246, 0.08);
  top: -200px;
  right: -200px;
  animation-delay: 0s;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: rgba(168, 85, 247, 0.06);
  bottom: -150px;
  left: -150px;
  animation-delay: -7s;
}

.orb-3 {
  width: 400px;
  height: 400px;
  background: rgba(6, 182, 212, 0.05);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -14s;
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -30px) scale(1.05); }
  50% { transform: translate(-20px, 20px) scale(0.95); }
  75% { transform: translate(20px, 10px) scale(1.02); }
}

/* ========================
   Section Styles
======================== */
section {
  position: relative;
  z-index: 1;
  padding: 7rem 0;
  overflow: hidden;
}

section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.04) 0%, transparent 50%);
  pointer-events: none;
}

/* Section Dividers */
section:not(:last-of-type)::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--glass-border), transparent);
}

/* Hero Override */
#home {
  padding-top: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image:
    radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.12) 0%, transparent 60%),
    radial-gradient(circle at 80% 100%, rgba(168, 85, 247, 0.06) 0%, transparent 50%);
}

#home::before {
  background-image:
    radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 50%);
}

/* ========================
   Shared Component Classes
======================== */
.section-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 700;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
  line-height: 1.2;
}

.section-subtitle {
  text-align: center;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 4rem;
  font-size: 1.05rem;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.15);
  color: var(--primary-light);
  padding: 0.4rem 1rem;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}

.section-badge i {
  font-size: 0.7rem;
}

.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.glass-card:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-hover);
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* ========================
   Reveal Animations
======================== */
.reveal {
  opacity: 1 !important;
  transform: translateY(0) !important;
  filter: blur(0) !important;
}

.reveal-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  filter: blur(4px);
  transition: all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.reveal-on-scroll.reveal {
  filter: blur(0);
}

/* Stagger children */
.stagger-children > * {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.stagger-children.reveal > *:nth-child(1) { transition-delay: 0.05s; }
.stagger-children.reveal > *:nth-child(2) { transition-delay: 0.1s; }
.stagger-children.reveal > *:nth-child(3) { transition-delay: 0.15s; }
.stagger-children.reveal > *:nth-child(4) { transition-delay: 0.2s; }
.stagger-children.reveal > *:nth-child(5) { transition-delay: 0.25s; }
.stagger-children.reveal > *:nth-child(6) { transition-delay: 0.3s; }
.stagger-children.reveal > *:nth-child(7) { transition-delay: 0.35s; }
.stagger-children.reveal > *:nth-child(8) { transition-delay: 0.4s; }

.stagger-children.reveal > * {
  opacity: 1;
  transform: translateY(0);
}

/* ========================
   Back to Top Button
======================== */
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  background: var(--primary);
  border: none;
  border-radius: var(--radius-md);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px var(--primary-glow);
  transition: all 0.3s ease;
}

.back-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px var(--primary-glow);
}

/* Transition */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.3s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>