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
      text: 'Message enregistré (simulation). Utilisez aussi mailto ci-dessous.',
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
  <article>
    <h2>Contact</h2>
    <p>
      Courriel :
      <a href="mailto:dube.arthur@gmail.com">dube.arthur@gmail.com</a>
      · Téléphone : 438-506-2474 · Québec, Canada
    </p>

    <form @submit.prevent="handleSubmit" novalidate>
      <label for="name">Nom</label>
      <input id="name" v-model="form.name" type="text" required />
      <p v-if="errors.name" class="error">{{ errors.name }}</p>

      <label for="email">Courriel</label>
      <input id="email" v-model="form.email" type="email" required />
      <p v-if="errors.email" class="error">{{ errors.email }}</p>

      <label for="subject">Sujet</label>
      <input id="subject" v-model="form.subject" type="text" required />
      <p v-if="errors.subject" class="error">{{ errors.subject }}</p>

      <label for="message">Message</label>
      <textarea id="message" v-model="form.message" rows="6" required></textarea>
      <p v-if="errors.message" class="error">{{ errors.message }}</p>

      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Envoi…' : 'Envoyer' }}
      </button>

      <p v-if="submitMessage" :class="submitMessage.type === 'success' ? 'message-ok' : 'message-err'">
        {{ submitMessage.text }}
      </p>
    </form>
  </article>
</template>
