<template>
  <div class="skills-container py-5">
    <div class="container">
      <div class="text-center mb-5 fade-in">
        <h2 class="section-title">Mes Compétences</h2>
        <p class="text-muted">Technologies et outils que je maîtrise</p>
        <div class="header-line"></div>
      </div>

      <div class="row g-4">
        <!-- Langages de Programmation -->
        <div class="col-lg-4 col-md-6">
          <div class="skill-category">
            <h3 class="category-title">
              <i></i>
              Langages
            </h3>
            <div class="skills-grid">
              <div class="skill-item" v-for="skill in programmingLanguages" :key="skill.name">
                <div class="skill-icon">
                  <i></i>
                </div>
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <div class="skill-level">
                    <div class="level-bar">
                      <div class="level-fill" :style="{ width: skill.level + '%' }"></div>
                    </div>
                    <span class="level-text">{{ skill.level }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Frameworks et Librairies -->
        <div class="col-lg-4 col-md-6">
          <div class="skill-category">
            <h3 class="category-title">
              <i></i>
              Frameworks
            </h3>
            <div class="skills-grid">
              <div class="skill-item" v-for="skill in frameworks" :key="skill.name">
                <div class="skill-icon">
                  <i></i>
                </div>
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <div class="skill-level">
                    <div class="level-bar">
                      <div class="level-fill" :style="{ width: skill.level + '%' }"></div>
                    </div>
                    <span class="level-text">{{ skill.level }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Outils et Autres -->
        <div class="col-lg-4 col-md-12">
          <div class="skill-category">
            <h3 class="category-title">
              <i></i>
              Outils
            </h3>
            <div class="skills-grid">
              <div class="skill-item" v-for="skill in tools" :key="skill.name">
                <div class="skill-icon">
                  <i></i>
                </div>
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <div class="skill-level">
                    <div class="level-bar">
                      <div class="level-fill" :style="{ width: skill.level + '%' }"></div>
                    </div>
                    <span class="level-text">{{ skill.level }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Compétences Soft Skills -->
      <div class="soft-skills-section mt-5">
        <h3 class="text-center mb-4">Compétences Transversales</h3>
        <div class="row justify-content-center">
          <div class="col-md-3 col-sm-6 mb-3" v-for="softSkill in softSkills" :key="softSkill">
            <div class="soft-skill-item">
              <i></i>
              <span>{{ softSkill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const programmingLanguages = ref([
  { name: 'JavaScript',level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Python', level: 70 },
  { name: 'Java', level: 70 },
  { name: 'C#', level: 75 },
  { name: 'C++', level: 75 },
  { name: 'HTML/CSS',level: 70 },
  { name: 'VBA / Visual Basic', level: 90 },
  { name: 'GDScript', level: 75 }
]);

const frameworks = ref([
  { name: 'Vue.js', level: 80 },
  { name: 'React', level: 75 },
  { name: 'React Native', level: 70 },
  { name: 'Node.js', level: 70 },
  { name: 'Express.js', level: 60 },
  { name: 'Bootstrap',level: 85 },
  { name: 'Unity', level: 65 }
]);

const tools = ref([
  { name: 'Git', level: 80 },
  { name: 'Docker', level: 75 },
  { name: 'VS Code', level: 99 },
  { name: 'Figma', level: 70 },
  { name: 'MySQL / SQL', level: 60},
  { name: 'Postman API', level: 75 },
  { name: 'Microsoft Power BI', level: 80 },
  { name: 'Power Automate', level: 60 }
]);

const softSkills = ref([
  "Travail d'équipe",
  'Résolution de problèmes',
  'Apprentissage rapide',
  'Communication',
  'Gestion du temps',
  'Adaptabilité',
]);
</script>

<style scoped>

</style>
