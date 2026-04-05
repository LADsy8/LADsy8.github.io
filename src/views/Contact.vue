<template>
  <div class="contact-container py-5">
    <div class="container">
      <div class="text-center mb-5 fade-in">
        <h2 class="section-title">Me Contacter</h2>
        <p class="text-muted">
          N'hésitez pas à me contacter pour discuter de projets ou d'opportunités
        </p>
        <div class="header-line"></div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="contact-card">
            <div class="row">
              <!-- Informations de contact -->
              <div class="col-md-5 mb-4 mb-md-0">
                <div class="contact-info">
                  <h3 class="mb-4">Informations</h3>

                  <div class="info-item mb-3">
                    <div class="info-icon">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <div class="info-content">
                      <h5>Email</h5>
                      <p>ton-email@exemple.com</p>
                    </div>
                  </div>

                  <div class="info-item mb-3">
                    <div class="info-icon">
                      <i class="fas fa-phone"></i>
                    </div>
                    <div class="info-content">
                      <h5>Téléphone</h5>
                      <p>+33 6 XX XX XX XX</p>
                    </div>
                  </div>

                  <div class="info-item mb-3">
                    <div class="info-icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="info-content">
                      <h5>Localisation</h5>
                      <p>Votre Ville, France</p>
                    </div>
                  </div>

                  <div class="social-links mt-4">
                    <h5>Réseaux Sociaux</h5>
                    <div class="social-icons">
                      <a href="https://github.com/ladsy8" target="_blank" class="social-link">
                        <i class="fab fa-github"></i>
                      </a>
                      <a
                        href="https://linkedin.com/in/votreprofil"
                        target="_blank"
                        class="social-link"
                      >
                        <i class="fab fa-linkedin"></i>
                      </a>
                      <a href="https://twitter.com/votrecompte" target="_blank" class="social-link">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Formulaire de contact -->
              <div class="col-md-7">
                <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
                  <div class="mb-3">
                    <label for="name" class="form-label">Nom complet</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      v-model="form.name"
                      :class="{ 'is-invalid': errors.name }"
                      required
                    />
                    <div class="invalid-feedback" v-if="errors.name">{{ errors.name }}</div>
                  </div>

                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      v-model="form.email"
                      :class="{ 'is-invalid': errors.email }"
                      required
                    />
                    <div class="invalid-feedback" v-if="errors.email">{{ errors.email }}</div>
                  </div>

                  <div class="mb-3">
                    <label for="subject" class="form-label">Sujet</label>
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      v-model="form.subject"
                      :class="{ 'is-invalid': errors.subject }"
                      required
                    />
                    <div class="invalid-feedback" v-if="errors.subject">{{ errors.subject }}</div>
                  </div>

                  <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea
                      class="form-control"
                      id="message"
                      rows="5"
                      v-model="form.message"
                      :class="{ 'is-invalid': errors.message }"
                      required
                    ></textarea>
                    <div class="invalid-feedback" v-if="errors.message">{{ errors.message }}</div>
                  </div>

                  <button type="submit" class="btn btn-primary w-100" :disabled="isSubmitting">
                    <span v-if="isSubmitting">
                      <i class="fas fa-spinner fa-spin me-2"></i>Envoi en cours...
                    </span>
                    <span v-else> <i class="fas fa-paper-plane me-2"></i>Envoyer le message </span>
                  </button>

                  <div
                    v-if="submitMessage"
                    class="alert mt-3"
                    :class="submitMessage.type === 'success' ? 'alert-success' : 'alert-danger'"
                  >
                    {{ submitMessage.text }}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { validateContactForm } from '../utils/validation';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const form = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const errors = reactive<Record<string, string>>({});
const isSubmitting = ref(false);
const submitMessage = ref<{ type: string; text: string } | null>(null);

/**
 * Gère la soumission du formulaire
 */
const handleSubmit = async () => {
  // Utiliser le helper de validation
  const validationErrors = validateContactForm(form);

  // Réinitialiser les erreurs
  Object.keys(errors).forEach(key => {
    delete errors[key];
  });

  // Appliquer les nouvelles erreurs
  Object.assign(errors, validationErrors);

  // Si des erreurs existent, arrêter
  if (Object.keys(validationErrors).length > 0) {
    return;
  }

  isSubmitting.value = true;
  submitMessage.value = null;

  try {
    // Simulation d'envoi (remplacer par EmailJS ou autre service)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Réinitialiser le formulaire
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';

    submitMessage.value = {
      type: 'success',
      text: 'Message envoyé avec succès ! Je vous répondrai bientôt.',
    };
  } catch (error) {
    submitMessage.value = {
      type: 'error',
      text: "Erreur lors de l'envoi du message. Veuillez réessayer.",
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-container {
  min-height: 90vh;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.section-title {
  font-weight: 800;
  font-size: 2.5rem;
}

.header-line {
  width: 50px;
  height: 4px;
  background: white;
  margin: 15px auto;
  border-radius: 2px;
}

.contact-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  color: #2d3436;
}

.contact-info h3 {
  color: #2d3436;
  font-weight: 700;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.info-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.info-content h5 {
  font-weight: 600;
  margin-bottom: 5px;
  color: #2d3436;
}

.info-content p {
  margin: 0;
  color: #636e72;
}

.social-links h5 {
  font-weight: 600;
  margin-bottom: 15px;
  color: #2d3436;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-link {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.social-link:hover {
  transform: scale(1.1);
}

.contact-form .form-label {
  font-weight: 600;
  color: #2d3436;
}

.contact-form .form-control {
  border: 2px solid #e9ecef;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.contact-form .form-control:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

.btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #5a6fd8, #6a4190);
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.alert {
  border-radius: 10px;
  border: none;
}

.fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  .contact-card {
    padding: 2rem;
  }
  .info-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>
