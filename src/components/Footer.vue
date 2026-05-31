<template>
  <footer class="py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 mb-4 mb-md-0">
          <div class="footer-brand mb-3">Rith .</div>
          <p class="text-white max-width-400">
            A passionate full-stack developer focused on building digital products that combine beautiful design with functional engineering.
          </p>
        </div>
        <div class="col-md-6">
          <div class="social-links-footer d-flex justify-content-md-end gap-3">
            <a href="#" class="social-icon-link"><i class="fab fa-github"></i></a>
            <a href="#" class="social-icon-link"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="social-icon-link"><i class="fab fa-behance"></i></a>
            <a href="#" class="social-icon-link"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <hr class="my-5 border-white opacity-10" />
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <p class="text-white small mb-0">&copy; {{ new Date().getFullYear() }} SopheaRith. All rights reserved.</p>
        <div class="footer-links d-flex gap-4">
          <a href="#home" class="text-white small">Home</a>
          <a href="#about" class="text-white small">About</a>
          <a href="#projects" class="text-white small">Projects</a>
          <a href="#contact" class="text-white small">Contact</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-brand {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
}

.max-width-400 {
  max-width: 400px;
}

.social-icon-link {
  width: 44px;
  height: 44px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.social-icon-link:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
  transform: translateY(-3px);
}

.footer-links a {
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary) !important;
}

.opacity-10 {
  opacity: 0.1;
}
</style>
