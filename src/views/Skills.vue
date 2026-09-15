<script setup lang="ts">
const programmingLanguages = [
  { name: 'JavaScript', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Python', level: 70 },
  { name: 'Java', level: 70 },
  { name: 'C#', level: 75 },
  { name: 'C++', level: 75 },
  { name: 'HTML/CSS', level: 70 },
  { name: 'VBA / Visual Basic', level: 90 },
  { name: 'GDScript', level: 75 },
];

const frameworks = [
  { name: 'Vue.js', level: 80 },
  { name: 'React', level: 75 },
  { name: 'React Native', level: 70 },
  { name: 'Node.js', level: 70 },
  { name: 'Express.js', level: 60 },
  { name: 'Bootstrap', level: 75 },
  { name: 'Unity', level: 65 },
];

const tools = [
  { name: 'Git', level: 80 },
  { name: 'Docker', level: 75 },
  { name: 'VS Code', level: 99 },
  { name: 'Figma', level: 70 },
  { name: 'MySQL / SQL', level: 60 },
  { name: 'Postman API', level: 75 },
  { name: 'Microsoft Power BI', level: 80 },
  { name: 'Power Automate', level: 60 },
];

const softSkills = [
  "Travail d'équipe",
  'Résolution de problèmes',
  'Apprentissage rapide',
  'Communication',
  'Gestion du temps',
  'Adaptabilité',
];
</script>

<template>
  <article class="skills-card">
    <header class="skills-header">
      <h2>Compétences</h2>
      <p class="subtitle">Technologies, outils et savoir-être que je maîtrise.</p>
    </header>

    <section class="skills-section">
      <h3>Langages</h3>
      <div class="skills-grid">
        <div v-for="skill in programmingLanguages" :key="skill.name" class="skill-item">
          <div class="skill-info">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-percentage">{{ skill.level }}%</span>
          </div>
          <div class="bar-bg">
            <div class="bar-fill" :style="{ width: `${skill.level}%` }"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <h3>Frameworks & Bibliothèques</h3>
      <div class="skills-grid">
        <div v-for="skill in frameworks" :key="skill.name" class="skill-item">
          <div class="skill-info">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-percentage">{{ skill.level }}%</span>
          </div>
          <div class="bar-bg">
            <div class="bar-fill" :style="{ width: `${skill.level}%` }"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <h3>Outils & Environnements</h3>
      <div class="skills-grid">
        <div v-for="skill in tools" :key="skill.name" class="skill-item">
          <div class="skill-info">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-percentage">{{ skill.level }}%</span>
          </div>
          <div class="bar-bg">
            <div class="bar-fill" :style="{ width: `${skill.level}%` }"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <h3>Compétences transversales</h3>
      <div class="soft-skills-wrapper">
        <span v-for="skill in softSkills" :key="skill" class="soft-skill-tag">
          {{ skill }}
        </span>
      </div>
    </section>
  </article>
</template>

<style scoped>
.skills-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skills-header h2 {
  margin: 0;
}

.subtitle {
  margin: 0.35rem 0 0;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.skills-section {
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
}

.skills-section h3 {
  margin-top: 0;
  margin-bottom: 1.25rem;
}

/* Grille des barres de progression */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  font-weight: 500;
}

.skill-name {
  color: var(--text-main);
}

.skill-percentage {
  color: var(--text-muted);
  font-size: 0.8rem;
}

.bar-bg {
  width: 100%;
  height: 0.5rem;
  background-color: var(--bg-main);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background-color: var(--primary);
  border-radius: var(--radius-sm);
  transition: width 0.3s ease;
}

/* Soft Skills Tags */
.soft-skills-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.soft-skill-tag {
  background-color: var(--bg-main);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.4rem 0.8rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-main);
}

@media (max-width: 640px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>