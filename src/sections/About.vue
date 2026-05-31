<template>
  <section id="about" class="py-5 reveal-on-scroll about-section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="glass-card p-4 p-lg-5 about-content">
            <h3 class="mb-4 text-white">Journey into Web Development</h3>
            <p class="text-white mb-4 ">
              I am currently a third-year student at <span class="text-primary fw-semibold">SETEC Institute</span>, majoring in
              Management Information Systems (MIS) with a specialization in web
              development.
            </p>
            <p class="text-white mb-4">
              Through my coursework and personal projects, I have
              gained hands-on experience in technologies such as 
              <span class="text-white">Node.js</span>, 
              <span class="text-white">Laravel</span>, 
              <span class="text-white">Vue.js</span> and 
              <span class="text-white">Angular</span>.
            </p>
            <p class="text-white">
              I am particularly passionate about building responsive and user-friendly
              web applications, and I enjoy tackling programming challenges that
              require both creativity and problem-solving skills.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="logo-wrapper text-center mt-5 mt-md-0">
            <div class="logo-backdrop"></div>
            <img
              src="/images/setec Logo.png"
              alt="SETec Institute Logo"
              class="img-fluid setec-logo"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal";

useReveal();
</script>

<style scoped>
.about-content {
  position: relative;
  overflow: hidden;
}

.about-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--primary);
}

.logo-wrapper {
  position: relative;
}

.logo-backdrop {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: var(--primary-glow);
  filter: blur(100px);
  border-radius: 50%;
  z-index: -1;
}

.setec-logo {
  max-width: 320px;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.1));
  transition: all 0.5s ease;
}

.setec-logo:hover {
  transform: scale(1.05) rotate(2deg);
  filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.2));
}

@media (max-width: 768px) {
  .about-content {
    padding: 2rem !important;
  }
}
</style>
