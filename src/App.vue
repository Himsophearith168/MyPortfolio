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
  <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<style>
.reveal {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Global section and footer background */
section,
footer {
  background-color: var(--bg-dark);
  background-image: 
    radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.15) 0%, transparent 50%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* Footer specific adjustments */
footer {
  min-height: auto;
  padding: 4rem 0;
  border-top: 1px solid var(--glass-border);
}

/* Hero section override */
#home {
  background-image: 
    radial-gradient(circle at 50% -20%, rgba(59, 130, 246, 0.3) 0%, transparent 70%),
    radial-gradient(circle at 0% 100%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
  position: relative;
}
</style>
