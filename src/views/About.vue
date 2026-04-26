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
            <img src="assets/1776786464860.jpg" alt="Arthur Dubé" class="about-image" />
            <div class="image-overlay">
              <span class="overlay-text">Développeur Full Stack Junior, Un des créateurs de Air-Métique.</span>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about-content">
            <h3 class="mb-3">Qui suis-je ?</h3>
            <p class="mb-3">
              Étudiant en informatique, je suis passionné par tout les pans du développement logiciel, du front-end au back-end. J'aime relever des défis techniques et apprendre de nouvelles technologies pour créer des solutions innovantes.
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
                <span class="stat-number">10+</span>
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
        <h4>Mai 2026</h4>
        <h5>Fin du DEC en Informatique</h5>
        <p>
          Achèvement de la formation technique et obtention du diplôme au Cégep de Sainte-Foy.
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h4>2026</h4>
        <h5>Création de Air-Métique</h5>
        <p>
          Développement d'une solution innovante de surveillance de la qualité de l'air. 
          Le projet a bénéficié d'une visibilité médiatique avec une entrevue à TVA.
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h4>2023 - 2026</h4>
        <h5>Études en Informatique - Québec</h5>
        <p>
          Déménagement à Sainte-Foy pour poursuivre la technique au Cégep de Sainte-Foy. 
          Spécialisation en programmation et développement de systèmes.
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h4>2022</h4>
        <h5>Virage vers l'Informatique</h5>
        <p>
          Transition vers la technique en informatique au Cégep Édouard-Montpetit pour 
          concrétiser mon intérêt pour les technologies.
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h4>2020</h4>
        <h5>Entrée au Cégep Édouard-Montpetit</h5>
        <p>Début des études collégiales en Sciences humaines.</p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h4>2018</h4>
        <h5>Premiers pas en Programmation</h5>
        <p>
          Premier contact avec le développement web lors d'un cours d'initiation au secondaire.
        </p>
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
  background: var(--bg-primary);
  transition: background 0.3s ease;
}

.section-title {
  font-weight: 800;
  color: var(--text-primary);
  font-size: 2.5rem;
  transition: color 0.3s ease;
}

.header-line {
  width: 50px;
  height: 4px;
  background: var(--accent);
  margin: 15px auto;
  border-radius: 2px;
  transition: background 0.3s ease;
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
  color: var(--text-primary);
  font-weight: 700;
  transition: color 0.3s ease;
}

.stats-row {
  background: var(--card-bg);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: background 0.3s ease;
}

.stat {
  text-align: center;
  flex: 1;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
  transition: color 0.3s ease;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
  transition: color 0.3s ease;
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
  background: var(--accent);
  transition: background 0.3s ease;
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
  background: var(--accent);
  border-radius: 50%;
  border: 4px solid var(--bg-primary);
  box-shadow: 0 0 0 2px var(--accent);
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.timeline-content {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: background 0.3s ease;
}

.timeline-content h4 {
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 5px;
  transition: color 0.3s ease;
}

.timeline-content h5 {
  color: var(--text-primary);
  font-weight: 700;
  margin-bottom: 10px;
  transition: color 0.3s ease;
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
