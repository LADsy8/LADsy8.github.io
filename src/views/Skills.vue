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
  { name: 'Bootstrap', level: 85 },
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

function formatSkills(items: { name: string; level: number }[]) {
  return items.map(s => `${s.name} (${s.level}%)`).join(', ');
}
</script>

<template>
  <article>
    <h2>Compétences</h2>
    <p>Technologies et outils que je maîtrise.</p>

    <h3>Langages</h3>
    <p>{{ formatSkills(programmingLanguages) }}.</p>

    <h3>Frameworks</h3>
    <p>{{ formatSkills(frameworks) }}.</p>

    <h3>Outils</h3>
    <p>{{ formatSkills(tools) }}.</p>

    <h3>Compétences transversales</h3>
    <p>{{ softSkills.join(', ') }}.</p>
  </article>
</template>
