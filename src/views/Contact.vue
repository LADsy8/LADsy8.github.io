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
                      <p>dube.arthur@gmail.com</p>
                    </div>
                  </div>

                  <div class="info-item mb-3">
                    <div class="info-icon">
                      <i class="fas fa-phone"></i>
                    </div>
                    <div class="info-content">
                      <h5>Téléphone</h5>
                      <p>4385062474</p>
                    </div>
                  </div>

                  <div class="info-item mb-3">
                    <div class="info-icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="info-content">
                      <h5>Localisation</h5>
                      <p>Québec, Canada</p>
                    </div>
                  </div>

                  <div class="social-links mt-4">
                    <h5>Réseaux Sociaux</h5>
                    <div class="social-icons">
                      <a href="https://github.com/ladsy8" target="_blank" class="social-link">
                        <i class="fab fa-github"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/arthur-dub%C3%A9-6a4587205/"
                        target="_blank"
                        class="social-link"
                      >
                        <i class="fab fa-linkedin"></i>
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
      text: '',
    };
  } catch (error) {
    submitMessage.value = {
      type: 'error',
      text: "",
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>

</style>
