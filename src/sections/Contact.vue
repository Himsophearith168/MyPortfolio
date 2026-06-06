<template>
  <section id="contact" class="contact-section reveal-on-scroll">
    <div class="container">
      <div class="section-badge justify-content-center d-flex">
        <i class="fas fa-envelope"></i>
        <span>Contact</span>
      </div>
      <h2 class="section-title">Get In Touch</h2>
      <p class="section-subtitle">
        Have a project in mind or just want to say hi? I'm always open to
        discussing new opportunities and creative ideas.
      </p>

      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="contact-wrapper glass-card overflow-hidden">
            <div class="row g-0">
              <!-- Sidebar -->
              <div class="col-lg-5 contact-sidebar">
                <div class="sidebar-content">
                  <h3 class="sidebar-title">Contact Information</h3>
                  <p class="sidebar-subtitle">
                    Feel free to reach out through any of these channels
                  </p>

                  <div class="contact-methods">
                    <a href="mailto:himsophearith44@gmail.com" class="method-item">
                      <div class="method-icon">
                        <i class="fas fa-envelope"></i>
                      </div>
                      <div class="method-info">
                        <span class="method-label">Email</span>
                        <span class="method-value">himsophearith44@gmail.com</span>
                      </div>
                      <i class="fas fa-arrow-right method-arrow"></i>
                    </a>

                    <div class="method-item">
                      <div class="method-icon">
                        <i class="fas fa-map-marker-alt"></i>
                      </div>
                      <div class="method-info">
                        <span class="method-label">Location</span>
                        <span class="method-value">Phnom Penh, Cambodia</span>
                      </div>
                    </div>

                    <div class="method-item">
                      <div class="method-icon">
                        <i class="fas fa-graduation-cap"></i>
                      </div>
                      <div class="method-info">
                        <span class="method-label">Education</span>
                        <span class="method-value">SETEC Institute</span>
                      </div>
                    </div>
                  </div>

                  <div class="sidebar-divider"></div>

                  <div class="sidebar-socials">
                    <span class="socials-label">Follow me</span>
                    <div class="socials-row">
                      <a href="#" class="social-link" aria-label="GitHub">
                        <i class="fab fa-github"></i>
                      </a>
                      <a href="#" class="social-link" aria-label="LinkedIn">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#" class="social-link" aria-label="Behance">
                        <i class="fab fa-behance"></i>
                      </a>
                      <a href="#" class="social-link" aria-label="Twitter">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Form -->
              <div class="col-lg-7">
                <div class="contact-form-wrap">
                  <form @submit.prevent="sendEmail">
                    <div class="row g-4">
                      <div class="col-md-6">
                        <div class="form-field">
                          <label class="field-label">Your Name</label>
                          <div class="field-input-wrap">
                            <i class="fas fa-user field-icon"></i>
                            <input
                              type="text"
                              v-model="form.name"
                              required
                              placeholder="Your Name"
                              class="field-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-field">
                          <label class="field-label">Your Email</label>
                          <div class="field-input-wrap">
                            <i class="fas fa-envelope field-icon"></i>
                            <input
                              type="email"
                              v-model="form.email"
                              required
                              placeholder="youremail@example.com"
                              class="field-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-field">
                          <label class="field-label">Subject</label>
                          <div class="field-input-wrap">
                            <i class="fas fa-tag field-icon"></i>
                            <input
                              type="text"
                              v-model="form.subject"
                              required
                              placeholder="Project Inquiry"
                              class="field-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-field">
                          <label class="field-label">Message</label>
                          <textarea
                            v-model="form.message"
                            rows="5"
                            required
                            placeholder="Tell me about your project..."
                            class="field-textarea"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-12">
                        <button
                          type="submit"
                          class="submit-btn"
                          :disabled="isSending"
                        >
                          <span v-if="isSending" class="btn-spinner"></span>
                          <i v-else class="fas fa-paper-plane"></i>
                          <span>{{ isSending ? "Sending..." : "Send Message" }}</span>
                        </button>
                      </div>
                    </div>

                    <!-- Status -->
                    <Transition name="fade">
                      <div v-if="submitStatus === 'success'" class="status-msg success">
                        <i class="fas fa-check-circle"></i>
                        <span>Message sent successfully!</span>
                      </div>
                    </Transition>
                    <Transition name="fade">
                      <div v-if="submitStatus === 'error'" class="status-msg error">
                        <i class="fas fa-times-circle"></i>
                        <span>Failed to send. Please try again.</span>
                      </div>
                    </Transition>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useReveal } from "@/composables/useReveal";
useReveal();

const form = reactive({ name: "", email: "", subject: "", message: "" });
const isSending = ref(false);
const submitStatus = ref("");

const sendEmail = async () => {
  isSending.value = true;
  submitStatus.value = "";
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    Object.keys(form).forEach((key) => (form[key] = ""));
    submitStatus.value = "success";
    setTimeout(() => {
      submitStatus.value = "";
    }, 5000);
  } catch {
    submitStatus.value = "error";
  } finally {
    isSending.value = false;
  }
};
</script>

<style scoped>
.contact-section {
  padding: 7rem 0;
}

/* Wrapper */
.contact-wrapper {
  border-radius: var(--radius-xl);
}

/* Sidebar */
.contact-sidebar {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.06), rgba(168, 85, 247, 0.04));
  border-right: 1px solid var(--glass-border);
}

.sidebar-content {
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.sidebar-title {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.sidebar-subtitle {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
}

/* Methods */
.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.method-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: default;
}

.method-item[href] {
  cursor: pointer;
}

.method-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

.method-item[href]:hover {
  border-color: rgba(59, 130, 246, 0.3);
}

.method-icon {
  width: 42px;
  height: 42px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-light);
  font-size: 0.95rem;
  flex-shrink: 0;
}

.method-info {
  flex: 1;
  min-width: 0;
}

.method-label {
  display: block;
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  margin-bottom: 0.15rem;
}

.method-value {
  font-size: 0.9rem;
  color: var(--text-primary);
  font-weight: 500;
}

.method-arrow {
  color: var(--text-muted);
  font-size: 0.75rem;
  transition: all 0.3s ease;
  opacity: 0;
}

.method-item[href]:hover .method-arrow {
  opacity: 1;
  transform: translateX(4px);
  color: var(--primary-light);
}

/* Divider */
.sidebar-divider {
  height: 1px;
  background: var(--glass-border);
  margin: 2rem 0;
}

/* Socials */
.socials-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.socials-row {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px var(--primary-glow);
}

/* Form */
.contact-form-wrap {
  padding: 3rem 2.5rem;
}

.form-field {
  margin-bottom: 0;
}

.field-label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.field-input-wrap {
  position: relative;
}

.field-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  font-size: 0.85rem;
  transition: color 0.3s ease;
  pointer-events: none;
}

.field-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  padding: 0.85rem 1rem 0.85rem 2.75rem;
  color: var(--text-primary);
  font-size: 0.95rem;
  font-family: var(--font-body);
  transition: all 0.3s ease;
}

.field-input:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 0 3px var(--primary-glow);
}

.field-input:focus + .field-icon,
.field-input:focus ~ .field-icon {
  color: var(--primary-light);
}

.field-input-wrap:focus-within .field-icon {
  color: var(--primary-light);
}

.field-textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  padding: 0.85rem 1rem;
  color: var(--text-primary);
  font-size: 0.95rem;
  font-family: var(--font-body);
  resize: vertical;
  transition: all 0.3s ease;
}

.field-textarea:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 0 3px var(--primary-glow);
}

/* Submit */
.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem 2rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font-body);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px var(--primary-glow);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px var(--primary-glow);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Status */
.status-msg {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: 0.9rem;
  margin-top: 1.25rem;
}

.status-msg.success {
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  color: #34d399;
}

.status-msg.error {
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: #f87171;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 991px) {
  .contact-sidebar {
    border-right: none;
    border-bottom: 1px solid var(--glass-border);
  }
  .sidebar-content {
    padding: 2rem 1.5rem;
  }
  .contact-form-wrap {
    padding: 2rem 1.5rem;
  }
}
</style>