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

const handleSubmit = async () => {
  const validationErrors = validateContactForm(form);

  Object.keys(errors).forEach(key => {
    delete errors[key];
  });
  Object.assign(errors, validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    return;
  }

  isSubmitting.value = true;
  submitMessage.value = null;

  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
    submitMessage.value = {
      type: 'success',
      text: 'Message envoyé (simulation).',
    };
  } catch {
    submitMessage.value = {
      type: 'error',
      text: "Erreur à l'envoi.",
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <article class="contact-card">
    <header class="contact-header">
      <h2>Me contacter</h2>
      <p class="subtitle">
        N’hésitez pas à me contacter pour discuter de projets ou d’opportunités.
      </p>
    </header>

    <section class="contact-section">
      <h3>Coordonnées</h3>
      <div class="info-grid">
        <div class="info-item">
          <span class="info-label">Courriel</span>
          <a href="mailto:dube.arthur@gmail.com" class="info-value">dube.arthur@gmail.com</a>
        </div>
        <div class="info-item">
          <span class="info-label">Téléphone</span>
          <a href="tel:4385062474" class="info-value">438-506-2474</a>
        </div>
        <div class="info-item">
          <span class="info-label">Localisation</span>
          <span class="info-value">Québec, Canada</span>
        </div>
        <div class="info-item">
          <span class="info-label">Réseaux</span>
          <div class="social-links">
            <a href="https://github.com/ladsy8" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/arthur-dub%C3%A9-6a4587205/"
              target="_blank"
              rel="noopener noreferrer"
              >LinkedIn</a
            >
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <h3>Formulaire</h3>
      <form @submit.prevent="handleSubmit" novalidate class="contact-form">
        <div class="form-group">
          <label for="name">Nom complet</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            :class="{ 'has-error': errors.name }"
            placeholder="Jean Dupont"
            required
          />
          <p v-if="errors.name" class="error">{{ errors.name }}</p>
        </div>

        <div class="form-group">
          <label for="email">Courriel</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            :class="{ 'has-error': errors.email }"
            placeholder="exemple@domaine.com"
            required
          />
          <p v-if="errors.email" class="error">{{ errors.email }}</p>
        </div>

        <div class="form-group">
          <label for="subject">Sujet</label>
          <input
            id="subject"
            v-model="form.subject"
            type="text"
            :class="{ 'has-error': errors.subject }"
            placeholder="Opportunité de projet"
            required
          />
          <p v-if="errors.subject" class="error">{{ errors.subject }}</p>
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            :class="{ 'has-error': errors.message }"
            placeholder="Votre message..."
            required
          ></textarea>
          <p v-if="errors.message" class="error">{{ errors.message }}</p>
        </div>

        <button type="submit" :disabled="isSubmitting" class="submit-btn">
          {{ isSubmitting ? 'Envoi…' : 'Envoyer le message' }}
        </button>

        <p
          v-if="submitMessage"
          :class="[
            'status-message',
            submitMessage.type === 'success' ? 'message-ok' : 'message-err',
          ]"
        >
          {{ submitMessage.text }}
        </p>
      </form>
    </section>
  </article>
</template>

<style scoped>
.contact-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-header h2 {
  margin: 0;
}

.subtitle {
  margin: 0.25rem 0 0;
  color: var(--text-muted);
}

.contact-section {
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
}

.contact-section h3 {
  margin-top: 0;
  margin-bottom: 1rem;
}

/* Grille d'informations de contact */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  background-color: var(--bg-main);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.25rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  color: var(--text-muted);
}

.info-value {
  font-weight: 500;
  color: var(--text-main);
  text-decoration: none;
}

.info-value[href]:hover {
  color: var(--primary);
  text-decoration: underline;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.social-links span {
  color: var(--text-muted);
}

/* Style du Formulaire */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-top: 0;
  margin-bottom: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
}

.form-group input,
.form-group textarea {
  margin-top: 0;
}

.form-group input.has-error,
.form-group textarea.has-error {
  border-color: var(--error);
  box-shadow: 0 0 0 1px var(--error);
}

.submit-btn {
  align-self: flex-start;
  margin-top: 0.5rem;
}

.status-message {
  margin: 0.5rem 0 0;
  padding: 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
}

.status-message.message-ok {
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: var(--success);
}

.status-message.message-err {
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  color: var(--error);
}

@media (max-width: 640px) {
  .info-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .submit-btn {
    width: 100%;
  }
}
</style>
