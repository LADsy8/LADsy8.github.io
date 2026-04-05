<template>
  <div class="about-container py-5">
    <div class="container">
      <div class="text-center mb-5 fade-in">
        <h2 class="section-title">À Propos de Moi</h2>
        <p class="text-muted">Découvrez mon parcours et mes motivations</p>
        <div class="header-line"></div>
      </div>

      <div class="row align-items-center mb-5">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="about-image-container">
            <img
              src="https://via.placeholder.com/400x400/6c5ce7/ffffff?text=Votre+Photo"
              alt="Ma photo"
              class="about-image"
            />
            <div class="image-overlay">
              <span class="overlay-text">Développeur Passionné</span>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about-content">
            <h3 class="mb-3">Qui suis-je ?</h3>
            <p class="mb-3">
              Étudiant en informatique, je suis passionné par le développement web et les
              technologies modernes. Mon objectif est de créer des applications web performantes et
              accessibles.
            </p>
            <p class="mb-4">
              Actuellement en formation, je cherche à acquérir de l'expérience professionnelle pour
              appliquer mes connaissances théoriques dans un environnement réel.
            </p>
            <div class="stats-row d-flex justify-content-between">
              <div class="stat">
                <span class="stat-number">1+</span>
                <span class="stat-label">Année d'expérience</span>
              </div>
              <div class="stat">
                <span class="stat-number">10+</span>
                <span class="stat-label">Projets réalisés</span>
              </div>
              <div class="stat">
                <span class="stat-number">5+</span>
                <span class="stat-label">Technologies maîtrisées</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="timeline-section">
        <h3 class="text-center mb-4">Mon Parcours</h3>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h4>2024 - Présent</h4>
              <h5>Étudiant en Techniques Informatiques</h5>
              <p>
                Formation intensive en développement web, bases de données, et programmation
                orientée objet.
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h4>2023</h4>
              <h5>Début en Programmation</h5>
              <p>Premiers pas dans le monde du code avec HTML, CSS, et JavaScript.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  min-height: 90vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.section-title {
  font-weight: 800;
  color: #2d3436;
  font-size: 2.5rem;
}

.header-line {
  width: 50px;
  height: 4px;
  background: #6c5ce7;
  margin: 15px auto;
  border-radius: 2px;
}

.about-image-container {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.about-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.about-image-container:hover .about-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(108, 92, 231, 0.8));
  padding: 20px;
  color: white;
  text-align: center;
}

.overlay-text {
  font-weight: 600;
  font-size: 1.2rem;
}

.about-content h3 {
  color: #2d3436;
  font-weight: 700;
}

.stats-row {
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.stat {
  text-align: center;
  flex: 1;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: #6c5ce7;
}

.stat-label {
  font-size: 0.9rem;
  color: #636e72;
  font-weight: 500;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #6c5ce7;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
  padding-left: 80px;
}

.timeline-marker {
  position: absolute;
  left: 20px;
  top: 10px;
  width: 20px;
  height: 20px;
  background: #6c5ce7;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 0 0 2px #6c5ce7;
}

.timeline-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.timeline-content h4 {
  color: #6c5ce7;
  font-weight: 600;
  margin-bottom: 5px;
}

.timeline-content h5 {
  color: #2d3436;
  font-weight: 700;
  margin-bottom: 10px;
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
  .about-image {
    height: 300px;
  }
  .timeline::before {
    left: 20px;
  }
  .timeline-item {
    padding-left: 60px;
  }
  .timeline-marker {
    left: 10px;
  }
}
</style>
