<template>
  <section id="contact" class="py-5 reveal-on-scroll contact-section">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <p class="text-center text-white mb-5 max-width-600 mx-auto">
        Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
      </p>

      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="glass-card contact-wrapper p-0 overflow-hidden">
            <div class="row g-0">
              <!-- Contact Info Sidebar -->
              <div class="col-md-5 contact-sidebar p-4 p-lg-5">
                <h3 class="mb-4 text-white">Contact Information</h3>
                
                <div class="contact-methods mt-5">
                  <div class="contact-method-item mb-4">
                    <div class="method-icon">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <div class="method-info">
                      <span class="label">Email</span>
                      <a href="mailto:homsophearith44@gmail.com" class="value">homsophearith44@gmail.com</a>
                    </div>
                  </div>

                  <div class="contact-method-item mb-4">
                    <div class="method-icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="method-info">
                      <span class="label">Location</span>
                      <span class="value">Phnom Penh, Cambodia</span>
                    </div>
                  </div>

                  <div class="contact-method-item">
                    <div class="method-icon">
                      <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div class="method-info">
                      <span class="label">Education</span>
                      <span class="value">SETEC Institute</span>
                    </div>
                  </div>
                </div>

                <div class="social-links-modern mt-auto pt-5">
                  <a href="#" class="social-btn"><i class="fab fa-github"></i></a>
                  <a href="#" class="social-btn"><i class="fab fa-linkedin"></i></a>
                  <a href="#" class="social-btn"><i class="fab fa-behance"></i></a>
                </div>
              </div>

              <!-- Contact Form -->
              <div class="col-md-7 p-4 p-lg-5">
                <form @submit.prevent="sendEmail" class="contact-form-modern">
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-group-modern">
                        <label>Your Name</label>
                        <input
                          type="text"
                          v-model="form.name"
                          required
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-group-modern">
                        <label>Your Email</label>
                        <input
                          type="email"
                          v-model="form.email"
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="mb-4">
                    <div class="form-group-modern">
                      <label>Subject</label>
                      <input
                        type="text"
                        v-model="form.subject"
                        required
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>

                  <div class="mb-5">
                    <div class="form-group-modern">
                      <label>Message</label>
                      <textarea
                        v-model="form.message"
                        rows="4"
                        required
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    class="btn-primary-modern w-100 justify-content-center"
                    :disabled="isSending"
                  >
                    <span v-if="isSending" class="spinner-border spinner-border-sm me-2"></span>
                    <i v-else class="fas fa-paper-plane me-2"></i>
                    {{ isSending ? "Sending Message..." : "Send Message" }}
                  </button>

                  <!-- Status Messages -->
                  <div v-if="submitStatus === 'success'" class="status-msg success mt-4">
                    <i class="fas fa-check-circle me-2"></i> Message sent successfully!
                  </div>
                  <div v-if="submitStatus === 'error'" class="status-msg error mt-4">
                    <i class="fas fa-times-circle me-2"></i> Failed to send. Please try again.
                  </div>
                </form>
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

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSending = ref(false);
const submitStatus = ref("");

const sendEmail = async () => {
  isSending.value = true;
  submitStatus.value = "";

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Reset form
    Object.keys(form).forEach(key => form[key] = "");
    submitStatus.value = "success";
    
    setTimeout(() => { submitStatus.value = ""; }, 5000);
  } catch (error) {
    submitStatus.value = "error";
  } finally {
    isSending.value = false;
  }
};
</script>

<style scoped>
.max-width-600 {
  max-width: 600px;
}

.contact-sidebar {
  background: rgba(59, 130, 246, 0.05);
  border-right: 1px solid var(--glass-border);
  display: flex;
  flex-direction: column;
}

.method-icon {
  width: 44px;
  height: 44px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 1.1rem;
}

.contact-method-item {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.method-info .label {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.method-info .value {
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

.method-info a.value:hover {
  color: var(--primary);
}

.social-links-modern {
  display: flex;
  gap: 1rem;
}

.social-btn {
  width: 40px;
  height: 40px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.3s ease;
}

.social-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
  transform: translateY(-3px);
  color: white;
}

/* Form Styles */
.form-group-modern label {
  display: block;
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group-modern input,
.form-group-modern textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  color: #fff;
  transition: all 0.3s ease;
}

.form-group-modern input:focus,
.form-group-modern textarea:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0 0 15px var(--primary-glow);
}

.btn-primary-modern {
  background: var(--primary);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px var(--primary-glow);
}

.btn-primary-modern:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px var(--primary-glow);
}

.status-msg {
  padding: 1rem;
  border-radius: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
}

.status-msg.success {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.status-msg.error {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

@media (max-width: 768px) {
  .contact-sidebar {
    border-right: none;
    border-bottom: 1px solid var(--glass-border);
  }
}
</style>
