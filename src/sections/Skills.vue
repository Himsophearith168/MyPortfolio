<template>
  <section id="skills" class="py-5 reveal-on-scroll skills-section">
    <div class="container">
      <h2 class="section-title">Skills & Technologies</h2>
      <div class="row g-4">
        <div v-for="skill in skills" :key="skill.name" class="col-lg-3 col-md-4 col-sm-6">
          <div class="skill-card-modern glass-card h-100">
            <div class="skill-icon-modern" :style="{ background: skill.color }">
              <i :class="skill.icon"></i>
            </div>
            <h5 class="skill-title-modern">{{ skill.name }}</h5>
            <p class="skill-desc-modern">{{ skill.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal";

useReveal();

const skills = [
  { name: "Vue.js", icon: "fab fa-vuejs", color: "linear-gradient(135deg, #4fc08d, #42b883)", desc: "Progressive Framework" },
  { name: "Angular", icon: "fab fa-angular", color: "linear-gradient(135deg, #dd0031, #c3002f)", desc: "Enterprise Platform" },
  { name: "Bootstrap", icon: "fab fa-bootstrap", color: "linear-gradient(135deg, #7952b3, #563d7c)", desc: "UI Framework" },
  { name: "Node.js", icon: "fab fa-node-js", color: "linear-gradient(135deg, #339933, #68a063)", desc: "JS Runtime" },
  { name: "MySQL", icon: "fas fa-database", color: "linear-gradient(135deg, #00758f, #f29111)", desc: "Database" },
  { name: "Figma", icon: "fab fa-figma", color: "linear-gradient(135deg, #f24e1e, #ff7262)", desc: "Design Tool" },
  { name: "JavaScript", icon: "fab fa-js", color: "linear-gradient(135deg, #f7df1e, #f0db4f)", desc: "Programming Language" },
  { name: "Photoshop", icon: "fas fa-image", color: "linear-gradient(135deg, #31a8ff, #1473e6)", desc: "Image Editing" },
];
</script>

<style scoped>
.skill-card-modern {
  padding: 2.5rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.skill-icon-modern {
  width: 70px;
  height: 70px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
}

.skill-card-modern:hover .skill-icon-modern {
  transform: rotate(10deg) scale(1.1);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
}

.skill-title-modern {
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.skill-desc-modern {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 0;
}
</style>
