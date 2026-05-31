<template>
  <div class="project-card-modern glass-card h-100 overflow-hidden">
    <div class="project-image-container">
      <img v-if="image" :src="image" :alt="title" class="project-img" />
      <div v-else class="project-img-placeholder">
        <i class="fas fa-code fa-2x"></i>
      </div>
      <div class="project-overlay">
        <a :href="link" target="_blank" class="overlay-btn">
          <i class="fas fa-eye me-2"></i>Live Demo
        </a>
      </div>
    </div>
    <div class="project-body p-4">
      <div class="d-flex justify-content-between align-items-start mb-3">
        <h4 class="project-title">{{ title }}</h4>
        <div class="project-links-modern">
          <a v-if="isGithubLink" :href="link" target="_blank" class="link-icon-modern">
            <i class="fab fa-github"></i>
          </a>
          <a v-else-if="isBehanceLink" :href="link" target="_blank" class="link-icon-modern">
            <i class="fab fa-behance"></i>
          </a>
          <a v-else :href="link" target="_blank" class="link-icon-modern">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
      <p class="project-text mb-4">{{ description }}</p>
      <div v-if="techArray.length" class="tech-tags mt-auto">
        <span v-for="tech in techArray" :key="tech" class="tech-tag">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
  technologies: String,
});

const techArray = computed(() => {
  return props.technologies ? props.technologies.split(',').map(t => t.trim()) : [];
});

const isGithubLink = computed(() => props.link?.includes("github.com"));
const isBehanceLink = computed(() => props.link?.includes("behance.net"));
</script>

<style scoped>
.project-card-modern {
  display: flex;
  flex-direction: column;
}

.project-image-container {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-img-placeholder {
  width: 100%;
  height: 100%;
  background: var(--glass-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(3, 7, 18, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.project-card-modern:hover .project-overlay {
  opacity: 1;
}

.project-card-modern:hover .project-img {
  transform: scale(1.1);
}

.overlay-btn {
  background: white;
  color: var(--bg-dark);
  padding: 0.75rem 1.5rem;
  border-radius: 100px;
  font-weight: 600;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.project-card-modern:hover .overlay-btn {
  transform: translateY(0);
}

.project-title {
  font-size: 1.25rem;
  color: #fff;
  margin: 0;
}

.project-text {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  color: var(--text-muted);
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 500;
}

.link-icon-modern {
  color: var(--text-muted);
  font-size: 1.25rem;
  transition: color 0.3s ease;
}

.link-icon-modern:hover {
  color: var(--primary);
}
</style>
