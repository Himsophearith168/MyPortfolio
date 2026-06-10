<template>
  <section id="home" class="hero-section">
    <!-- Animated Grid Background -->
    <div class="hero-grid"></div>

    <div class="container position-relative" style="z-index: 2">
      <div class="row align-items-center">
        <!-- Left Content -->
        <div class="col-lg-7">
          <div class="hero-badge mb-4 reveal-on-scroll">
            <span class="badge-dot"></span>
            <span>Available for projects</span>
          </div>

          <h1 class="hero-title mb-4 reveal-on-scroll">
            Hi, I'm
            <span class="text-gradient">{{ displayText }}</span>
            <span v-if="isTyping || isDeleting" class="typing-cursor">|</span>
          </h1>

          <p class="hero-desc mb-5 reveal-on-scroll">
            Crafting digital experiences with
            <span class="highlight">precision</span> and
            <span class="highlight">purpose</span>. Full Stack Developer
            specialized in modern web technologies & creative design.
          </p>

          <div class="hero-actions reveal-on-scroll">
            <a href="#contact" class="btn-hero-primary">
              <span>Get In Touch</span>
              <i class="fas fa-arrow-right"></i>
            </a>
            <a href="#projects" class="btn-hero-secondary">View My Work</a>
            <a href="/cv/myCV.pdf" download class="btn-hero-ghost">
              <i class="fas fa-download"></i>
              <span>Resume</span>
            </a>
          </div>

          <!-- Stats Row -->
          <div class="hero-stats reveal-on-scroll">
            <div class="stat-item">
              <span class="stat-number">2+</span>
              <span class="stat-label">Years Exp.</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">15+</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">10+</span>
              <span class="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>

        <!-- Right Image -->
        <div class="col-lg-5 d-none d-lg-block">
          <div class="hero-visual">
            <div class="visual-glow"></div>
            <div class="visual-ring ring-1"></div>
            <div class="visual-ring ring-2"></div>
            <div class="profile-frame">
              <img src="/images/IMG_3186.jpg" alt="SopheaRith" class="profile-img" />
              <div class="frame-border"></div>
            </div>

            <!-- Floating Tech Badges -->
            <div class="float-badge badge-vue">
              <i class="fab fa-vuejs"></i>
            </div>
            <div class="float-badge badge-laravel">
              <i class="fab fa-laravel"></i>
            </div>
            <div class="float-badge badge-figma">
              <i class="fab fa-figma"></i>
            </div>
            <div class="float-badge badge-node">
              <i class="fab fa-node-js"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
      <span>Scroll down</span>
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin-top: 80px;
  padding-top: 250px;
  position: relative;
}

/* Animated Grid */
.hero-grid {
  position: absolute;
  inset: 0;
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
  animation: gridPulse 8s ease-in-out infinite;
}

@keyframes gridPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.15);
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary-light);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.badge-dot {
  width: 7px;
  height: 7px;
  background: var(--success);
  border-radius: 50%;
  animation: dotPulse 2s ease-in-out infinite;
}

@keyframes dotPulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
  50% { opacity: 0.8; box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
}

/* Title */
.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(2.75rem, 7vw, 4.5rem);
  font-weight: 800;
  line-height: 1.08;
  color: #fff;
  letter-spacing: -0.03em;
}

.text-gradient {
  background: linear-gradient(135deg, var(--primary-light), var(--secondary-light), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.typing-cursor {
  color: var(--primary);
  font-weight: 300;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Description */
.hero-desc {
  font-size: 1.15rem;
  color: var(--text-muted);
  max-width: 560px;
  line-height: 1.75;
}

.hero-desc .highlight {
  color: var(--text-primary);
  font-weight: 600;
  position: relative;
}

.hero-desc .highlight::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 2px;
  opacity: 0.5;
}

/* Buttons */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}

.btn-hero-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 2rem;
  background: var(--primary);
  color: white;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px var(--primary-glow), inset 0 1px 0 rgba(255,255,255,0.1);
}

.btn-hero-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px var(--primary-glow);
  color: white;
}

.btn-hero-primary:hover i {
  transform: translateX(4px);
}

.btn-hero-primary i {
  font-size: 0.85rem;
  transition: transform 0.3s ease;
}

.btn-hero-secondary {
  display: inline-flex;
  align-items: center;
  padding: 0.9rem 2rem;
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  color: white;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-hero-secondary:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-hover);
  transform: translateY(-3px);
  color: white;
}

.btn-hero-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 1.5rem;
  color: var(--text-muted);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-hero-ghost:hover {
  color: var(--primary-light);
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--glass-border);
}

/* Hero Visual */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
}

.visual-glow {
  position: absolute;
  width: 140%;
  height: 140%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%);
  filter: blur(40px);
  animation: glowPulse 5s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.08); }
}

.visual-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.ring-1 {
  width: 350px;
  height: 350px;
  animation: ringRotate 30s linear infinite;
}

.ring-2 {
  width: 450px;
  height: 450px;
  animation: ringRotate 45s linear infinite reverse;
  border-style: dashed;
}

@keyframes ringRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.profile-frame {
  width: 320px;
  height: 420px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  position: relative;
  z-index: 2;
  animation: floatY 6s ease-in-out infinite;
}

.frame-border {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-16px); }
}

/* Floating Badges */
.float-badge {
  position: absolute;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  z-index: 3;
  box-shadow: var(--shadow-md);
}

.badge-vue {
  top: 8%;
  right: 5%;
  color: #4fc08d;
  animation: floatY 5s ease-in-out infinite;
}

.badge-laravel {
  bottom: 12%;
  left: 0%;
  color: #ff2d20;
  animation: floatY 6s ease-in-out infinite 1s;
}

.badge-figma {
  top: 25%;
  left: -5%;
  color: #f24e1e;
  animation: floatY 7s ease-in-out infinite 0.5s;
}

.badge-node {
  bottom: 25%;
  right: 0%;
  color: #68a063;
  animation: floatY 5.5s ease-in-out infinite 1.5s;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: fadeInUp 1s ease 1.5s both;
}

.scroll-mouse {
  width: 22px;
  height: 34px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 11px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.scroll-wheel {
  width: 3px;
  height: 8px;
  background: var(--primary);
  border-radius: 3px;
  animation: scrollWheel 2s ease-in-out infinite;
}

@keyframes scrollWheel {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(10px); opacity: 0; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateX(-50%) translateY(20px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}

@media (max-width: 991px) {
  .hero-section {
    text-align: center;
    padding-top: 120px;
  }
  .hero-desc {
    margin: 0 auto 2.5rem;
  }
  .hero-actions {
    justify-content: center;
  }
  .hero-stats {
    justify-content: center;
  }
  .scroll-indicator {
    display: none;
  }
}
</style>