<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-4">
          <div class="footer-brand">
            <h3>Mon Portfolio</h3>
            <p class="footer-description">
              Développeur passionné par l'automatisation et la création de projets innovants. N'hésitez pas à me contacter !
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
                href="https://linkedin.com/in/votreprofil"
                target="_blank"
                class="social-link"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="https://youtu.be/JRGapkYke9k?si=quuLZp7RtaakKMCM"
                target="_blank"
                class="social-link"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div class="footer-contact mt-3">
              <p><i class="fas fa-envelope me-2"></i>dube.arthur@gmail.com</p>
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
              Fait avec <i class="fas fa-heart text-danger"></i> et Vue.js
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
.footer {
  background: linear-gradient(135deg, #2d3436 0%, #1a1a1a 100%);
  color: white;
  padding: 3rem 0 1rem;
  margin-top: auto;
}

.footer-brand h3 {
  color: white;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer-description {
  line-height: 1.6;
  margin-bottom: 0;
  color: white;
}

.footer-links h4,
.footer-social h4 {
  color: white;
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer-links ul {
  padding: 0;
  margin: 0;
  color:white;
}

.footer-link {
  color: white;
  text-decoration: none;
  display: block;
  padding: 0.25rem 0;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #6c5ce7;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-bottom: 1rem;
}

.social-link {
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #6c5ce7;
  color: white;
  transform: translateY(-3px);
}

.footer-contact p {
  margin: 0;
  font-size: 0.9rem;
  color:white;
}

.footer-divider {
  border-color: rgba(255, 255, 255, 0.1);
  margin: 2rem 0 1.5rem;
}

.footer-bottom {
  font-size: 0.9rem;
}

.copyright {
  color: #e9ecef;
}

.footer-note {
  color: #e9ecef;
}

.footer-note .text-danger {
  color: #dc3545 !important;
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 1rem;
    text-align: center;
  }

  .footer-bottom .row {
    text-align: center;
  }

  .footer-bottom .col-md-6 {
    margin-bottom: 1rem;
  }
}
</style>
