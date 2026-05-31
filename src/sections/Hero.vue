<template>
  <section
    id="home"
    class="hero-section min-vh-100 d-flex align-items-center position-relative"
  >
    <div class="container position-relative z-1">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="badge-container mb-4">
            <span class="glass-badge">Available for projects</span>
          </div>
          <h1 class="hero-title mb-4">
            Hi, I'm <span class="text-gradient">{{ displayText }}</span><span v-if="isTyping || isDeleting" class="cursor">|</span>
          </h1>
          <p class="hero-subtitle mb-5">
            Crafting digital experiences with <span class="text-white fw-semibold">precision</span> and <span class="text-white fw-semibold">purpose</span>. 
            Full Stack Developer specialized in modern web technologies.
          </p>
          <div class="hero-actions d-flex flex-wrap gap-3">
            <a href="#contact" class="btn-primary-modern">
              Get In Touch
              <i class="fas fa-arrow-right ms-2"></i>
            </a>
            <a href="#projects" class="btn-secondary-modern">
              View My Work
            </a>
            <a
              href="/cv/myCV.pdf"
              download
              class="btn-outline-modern"
            >
              <i class="fas fa-download me-2"></i>
              Resume
            </a>
          </div>
        </div>
        <div class="col-lg-5 d-none d-lg-block">
          <div class="hero-image-wrapper">
            <div class="image-glow"></div>
            <div class="profile-frame">
              <img
                src="/images/IMG_3186.jpg"
                alt="Profile"
                class="profile-img"
              />
            </div>
            <!-- Floating Decorative Elements -->
            <div class="floating-element element-1"></div>
            <div class="floating-element element-2"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal";
import { useTypewriter } from "@/composables/useTypewriter";

const { displayText, isTyping, isDeleting } = useTypewriter("SopheaRith");
useReveal();
</script>

<style scoped>
.hero-section {
  padding-top: 80px;
}

.z-1 {
  z-index: 1;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 5rem);
  line-height: 1.1;
  font-weight: 800;
  color: #fff;
}

.text-gradient {
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 600px;
  line-height: 1.7;
}

.glass-badge {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Buttons */
.btn-primary-modern {
  background: var(--primary);
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px var(--primary-glow);
}

.btn-primary-modern:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px var(--primary-glow);
}

.btn-secondary-modern {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary-modern:hover {
  background: var(--glass-bg-hover);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.btn-outline-modern {
  color: var(--text-muted);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.btn-outline-modern:hover {
  color: #fff;
}

/* Profile Image */
.hero-image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-frame {
  width: 380px;
  height: 480px;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  z-index: 2;
  border: 1px solid var(--glass-border);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  animation: float 6s ease-in-out infinite;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-glow {
  position: absolute;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, var(--primary-glow) 0%, transparent 70%);
  z-index: 1;
  filter: blur(40px);
  animation: pulse 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}

.cursor {
  color: var(--primary);
  font-weight: 300;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Floating Elements */
.floating-element {
  position: absolute;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  z-index: 3;
}

.element-1 {
  width: 60px;
  height: 60px;
  top: 10%;
  left: -5%;
  animation: float 8s ease-in-out infinite reverse;
}

.element-2 {
  width: 80px;
  height: 80px;
  bottom: 15%;
  right: -5%;
  animation: float 7s ease-in-out infinite 1s;
}

@media (max-width: 991px) {
  .hero-section {
    text-align: center;
    padding-top: 120px;
  }
  
  .hero-subtitle {
    margin: 0 auto 3rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
}
</style>
