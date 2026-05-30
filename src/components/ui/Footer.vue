<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-4">
          <div class="footer-brand">
            <h3>Mon Portfolio</h3>
            <p class="footer-description">
              Développeur 
            </p>
          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="footer-links">
            <h4>Navigation</h4>
            <ul class="list-unstyled">
              <li><router-link to="/" class="footer-link">Accueil</router-link></li>
              <li><router-link to="/about" class="footer-link">À Propos</router-link></li>
              <li><router-link to="/skills" class="footer-link">Compétences</router-link></li>
              <li><router-link to="/repos/all" class="footer-link">Projets</router-link></li>
              <li><router-link to="/contact" class="footer-link">Contact</router-link></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="footer-social">
            <h4>Me Suivre</h4>
            <div class="social-icons">
              <a
                href="https://github.com/ladsy8"
                target="_blank"
                class="social-link"
                aria-label="GitHub"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/arthur-dub%C3%A9-6a4587205/"
                target="_blank"
                class="social-link"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              
            </div>
            <div class="footer-contact mt-3">
              <p>dube.arthur@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <hr class="footer-divider" />

      <div class="footer-bottom">
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="copyright mb-0">&copy; 2026 Mon Portfolio. Tous droits réservés.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <p class="footer-note mb-0">
              Fait avec amour et Vue.js
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Pas de logique spécifique pour le footer
</script>

<style scoped>

</style>
