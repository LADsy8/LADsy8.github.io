<template>
  <article class="about-card">
    <header class="about-header">
      <div class="about-intro">
        <h2>À propos</h2>
        <p class="subtitle">Parcours, formation et objectifs professionnels.</p>
      </div>
      <img src="/photo-arthur.png" alt="Arthur Dubé" width="200" class="profile-avatar" />
    </header>

    <section class="about-section">
      <h3>Qui suis-je ?</h3>
      <p>
        Développeur junior : diplômé du DEC en techniques de l’informatique (profil
        <strong>mobile, web et jeux vidéo</strong>) au Cégep de Sainte-Foy en
        <strong>mai 2026</strong>.
      </p>
      <p>
        Passionné par le développement full-stack, orienté code propre et apprentissage sur le
        terrain. À la recherche d'une opportunité en entreprise pour contribuer à des projets réels.
      </p>
    </section>

    <section class="about-section">
      <h3>En bref</h3>
      <ul class="stats-grid">
        <li>
          <span class="stat-number">2+</span>
          <span class="stat-label">Années d’expérience pratique</span>
        </li>
        <li>
          <span class="stat-number">10+</span>
          <span class="stat-label">Projets réalisés</span>
        </li>
        <li>
          <span class="stat-number">10+</span>
          <span class="stat-label">Technologies utilisées</span>
        </li>
      </ul>
    </section>

    <section class="about-section">
      <h3>Formation</h3>
      <ul class="styled-list">
        <li>
          <strong>Mai 2026</strong> — DEC en techniques de l’informatique, profil mobile / web /
          jeux vidéo (Cégep de Sainte-Foy)
        </li>
      </ul>
    </section>

    <section class="about-section">
      <h3>Parcours</h3>
      <ul class="timeline">
        <li>
          <span class="timeline-date">2026</span>
          <span class="timeline-content"
            >Co-création d’Air-Métique (qualité de l’air, entrevue TVA)</span
          >
        </li>
        <li>
          <span class="timeline-date">2023–2026</span>
          <span class="timeline-content">DEC techniques de l’informatique à Sainte-Foy</span>
        </li>
        <li>
          <span class="timeline-date">2022</span>
          <span class="timeline-content">Passage en informatique au Cégep Édouard-Montpetit</span>
        </li>
        <li>
          <span class="timeline-date">2020</span>
          <span class="timeline-content"
            >Entrée au Cégep Édouard-Montpetit (sciences humaines)</span
          >
        </li>
        <li>
          <span class="timeline-date">2018</span>
          <span class="timeline-content">Premiers pas en programmation au secondaire</span>
        </li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
.about-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.about-header h2 {
  margin: 0;
}

.subtitle {
  margin: 0.25rem 0 0;
  color: var(--text-muted);
}

.profile-avatar {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid var(--border);
  box-shadow: var(--shadow-sm);
  flex-shrink: 0;
}

.about-section {
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
}

.about-section h3 {
  margin-top: 0;
}

/* Grille "En bref" */
.stats-grid {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.stats-grid li {
  background: var(--bg-main);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 1.2;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

/* Liste alignée */
.styled-list {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0;
}

/* Chronologie */
.timeline {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.timeline li {
  display: flex;
  gap: 1rem;
  align-items: baseline;
}

.timeline-date {
  font-weight: 600;
  color: var(--primary);
  min-width: 6rem;
  font-size: 0.9rem;
}

.timeline-content {
  color: var(--text-main);
}

@media (max-width: 640px) {
  .about-header {
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  .profile-avatar {
    width: 90px;
    height: 90px;
  }

  .timeline li {
    flex-direction: column;
    gap: 0.1rem;
  }

  .timeline-date {
    min-width: auto;
  }
}
</style>
