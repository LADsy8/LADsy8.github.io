<script setup lang="ts">
const programmingLanguages = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C#',
  'C++',
  'HTML/CSS',
  'VBA / Visual Basic',
  'GDScript',
];

const frameworks = [
  'Vue.js',
  'React',
  'React Native',
  'Node.js',
  'Express.js',
  'Bootstrap',
  'Unity',
];

const tools = [
  'Git',
  'Docker',
  'VS Code',
  'Figma',
  'MySQL / SQL',
  'Postman',
  'Power BI',
  'Power Automate',
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
  <article>
    <h2>Compétences</h2>

    <h3>Langages</h3>
    <p>{{ programmingLanguages.join(', ') }}.</p>

    <h3>Frameworks</h3>
    <p>{{ frameworks.join(', ') }}.</p>

    <h3>Outils</h3>
    <p>{{ tools.join(', ') }}.</p>

    <h3>Transversal</h3>
    <p>{{ softSkills.join(', ') }}.</p>
  </article>
</template>
