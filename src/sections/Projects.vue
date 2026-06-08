<template>
  <section id="projects" class="py-5 reveal-on-scroll projects-section">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      
      <!-- Web Development Projects -->
      <div class="row mb-5">
        <div class="col-12 mb-4">
          <div class="category-header">
            <i class="fas fa-code"></i>
            <h3>Web Development</h3>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mb-4">
          <ProjectCard
            title="E-Commerce Platform"
            description="A full-stack e-commerce website with user authentication, product catalog, and shopping cart."
            image="/images/Header_Image1.jpg"
            link="https://github.com/Himsophearith168/ecommerce_angular.git"
            technologies="Angular.js, Node.js, Express, MySQL"
          />
        </div>

        <div class="col-lg-3 col-md-6 mb-4">
          <ProjectCard
            title="Room Rental Management System"
            description="A System for managing room rentals, including booking, payment processing, and admin dashboard."
            image="/images/Header_Image2.jpg"
            link="https://github.com/Himsophearith168/rentroomMS.git"
            technologies="Vue.js, Node.js, Express, MySQL"
          />
        </div>

        <div class="col-lg-3 col-md-6 mb-4">
          <ProjectCard
            title="AlumiNet System"
            description="A System that Admin can Manage the alunmi profile score and certificate by Generate"
            image="/images/IMG_3186.jpg"
            link="https://github.com/Sourcedevkh/alumniNet-web.git"
            technologies="Node.js, Vue.js, MySQL"
          />
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <ProjectCard
            title="AlumiNet System"
            description="A System that Admin can Manage the alunmi profile score and certificate by Generate"
            image="/images/IMG_3186.jpg"
            link="https://github.com/Sourcedevkh/alumniNet-web.git"
            technologies="Node.js, Vue.js, MySQL"
          />
        </div>
      </div>

      <!-- Design Projects -->
      <div class="row">
        <div class="col-12 mb-4 mt-4">
          <div class="category-header">
            <i class="fas fa-palette"></i>
            <h3>UI/UX Design</h3>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 mb-4">
          <ProjectCard
            title="Mobile App Design"
            description="Complete UI/UX design for a fitness tracking mobile application with wireframes and mockups."
            image="/images/setec Logo.png"
            link="https://www.behance.net/sophearith168"
            technologies="Adobe XD, Figma, Photoshop"
          />
        </div>

        <div class="col-lg-6 col-md-6 mb-4">
          <ProjectCard
            title="Brand Identity Design"
            description="Complete brand identity design including logo, color palette, and brand guidelines."
            image="/images/Header_Image1.jpg"
            link="https://www.behance.net/sophearith168"
            technologies="Photoshop, Illustrator, Branding"
          />
        </div>
      </div>

      <div class="text-center mt-5">
        <a href="#contact" class="btn-primary-modern">
          Start a Conversation
          <i class="fas fa-paper-plane ms-2"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "@/components/ui/ProjectCard.vue";
import { useReveal } from "@/composables/useReveal";

useReveal();
</script>

<style scoped>
.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.category-header i {
  color: var(--primary);
  font-size: 1.5rem;
}

.category-header h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #fff;
}

.btn-primary-modern {
  background: var(--primary);
  color: white;
  padding: 1rem 2.5rem;
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
  color: white;
}
</style>
