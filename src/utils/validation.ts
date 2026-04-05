/**
 * Utilitaires pour la validation de formulaires
 */

/**
 * Valide une adresse email
 * @param email - L'adresse email à valider
 * @returns true si l'email est valide
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valide qu'une chaîne n'est pas vide après trim
 * @param value - La valeur à valider
 * @returns true si la valeur n'est pas vide
 */
export const isNotEmpty = (value: string): boolean => {
  return value.trim().length > 0;
};

/**
 * Valide la longueur minimale d'une chaîne
 * @param value - La valeur à valider
 * @param minLength - Longueur minimale requise
 * @returns true si la longueur est suffisante
 */
export const hasMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};

/**
 * Valide un formulaire de contact
 * @param form - L'objet formulaire à valider
 * @returns Objet avec les erreurs de validation
 */
export const validateContactForm = (form: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const errors: Record<string, string> = {};

  if (!isNotEmpty(form.name)) {
    errors.name = 'Le nom est requis';
  }

  if (!isNotEmpty(form.email)) {
    errors.email = "L'email est requis";
  } else if (!isValidEmail(form.email)) {
    errors.email = "L'email n'est pas valide";
  }

  if (!isNotEmpty(form.subject)) {
    errors.subject = 'Le sujet est requis';
  }

  if (!isNotEmpty(form.message)) {
    errors.message = 'Le message est requis';
  } else if (!hasMinLength(form.message, 10)) {
    errors.message = 'Le message doit contenir au moins 10 caractères';
  }

  return errors;
};
