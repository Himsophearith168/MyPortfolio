<template>
  <section id="about" class="about-section reveal-on-scroll">
    <div class="container">
      <div class="section-badge justify-content-center d-flex">
        <i class="fas fa-user"></i>
        <span>About Me</span>
      </div>
      <h2 class="section-title">Get To Know Me</h2>
      <p class="section-subtitle">
        A brief introduction about who I am and what drives me
      </p>

      <div class="row align-items-center g-5">
        <!-- Image Side -->
        <div class="col-lg-5">
          <div class="about-image-wrapper">
            <div class="about-img-glow"></div>
            <div class="about-img-frame">
              <img src="/images/IMG_3186.jpg" alt="About me" />
            </div>
            <!-- Experience Badge -->
            <div class="experience-badge">
              <span class="exp-number">2+</span>
              <span class="exp-text">Years<br />Experience</span>
            </div>
          </div>
        </div>

        <!-- Content Side -->
        <div class="col-lg-7">
          <div class="about-content">
            <h3 class="about-heading mb-4">
              I'm SopheaRith, a <span class="text-gradient">Full Stack Developer</span> &
              <span class="text-gradient">UI Designer</span> based in Phnom Penh
            </h3>

            <p class="about-text mb-4">
              I'm passionate about creating seamless digital experiences that bridge
              the gap between design and technology. With a strong foundation in both
              front-end and back-end development, I bring ideas to life through clean
              code and thoughtful design.
            </p>

            <p class="about-text mb-5">
              Currently studying at SETEC Institute, I'm constantly expanding my
              skill set and staying up-to-date with the latest technologies. I believe
              great software is built at the intersection of technical excellence and
              human-centered design.
            </p>

            <!-- Info Grid -->
            <div class="about-info-grid mb-5">
              <div class="info-item">
                <span class="info-label">Name</span>
                <span class="info-value">Heng SopheaRith</span>
              </div>
              <div class="info-item">
                <span class="info-label">Email</span>
                <span class="info-value">homsophearith44@gmail.com</span>
              </div>
              <div class="info-item">
                <span class="info-label">Location</span>
                <span class="info-value">Phnom Penh, Cambodia</span>
              </div>
              <div class="info-item">
                <span class="info-label">Education</span>
                <span class="info-value">SETEC Institute</span>
              </div>
            </div>

            <div class="about-actions">
              <a href="#contact" class="btn-hero-primary">
                <span>Let's Work Together</span>
                <i class="fas fa-arrow-right"></i>
              </a>
              <a href="/cv/myCV.pdf" download class="btn-hero-ghost">
                <i class="fas fa-download"></i>
                <span>Download CV</span>
              </a>
            </div>
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
.about-section {
  padding: 7rem 0;
}

.text-gradient {
  background: linear-gradient(135deg, var(--primary-light), var(--secondary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Image Wrapper */
.about-image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
}

.about-img-glow {
  position: absolute;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%);
  filter: blur(40px);
  z-index: 0;
}

.about-img-frame {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-xl);
  overflow: hidden;
  position: relative;
  z-index: 1;
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-lg);
}

.about-img-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.experience-badge {
  position: absolute;
  bottom: -10px;
  right: -10px;
  background: var(--primary);
  color: white;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-lg);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 8px 24px var(--primary-glow);
}

.exp-number {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
}

.exp-text {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.3;
}

/* Content */
.about-heading {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 1.875rem);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
}

.about-text {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.8;
}

/* Info Grid */
.about-info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
}

.info-item:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-hover);
}

.info-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
}

.info-value {
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.95rem;
}

/* Actions */
.about-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
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
  box-shadow: 0 8px 24px var(--primary-glow);
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

@media (max-width: 991px) {
  .about-section {
    text-align: center;
  }
  .about-info-grid {
    grid-template-columns: 1fr;
  }
  .about-actions {
    justify-content: center;
  }
  .experience-badge {
    right: 20px;
  }
}
</style>