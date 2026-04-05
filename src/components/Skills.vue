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
              <i class="fas fa-code"></i>
              Langages
            </h3>
            <div class="skills-grid">
              <div class="skill-item" v-for="skill in programmingLanguages" :key="skill.name">
                <div class="skill-icon">
                  <i :class="skill.icon"></i>
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
              <i class="fas fa-layer-group"></i>
              Frameworks
            </h3>
            <div class="skills-grid">
              <div class="skill-item" v-for="skill in frameworks" :key="skill.name">
                <div class="skill-icon">
                  <i :class="skill.icon"></i>
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
              <i class="fas fa-tools"></i>
              Outils
            </h3>
            <div class="skills-grid">
              <div class="skill-item" v-for="skill in tools" :key="skill.name">
                <div class="skill-icon">
                  <i :class="skill.icon"></i>
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
              <i class="fas fa-check-circle"></i>
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
  { name: 'JavaScript', icon: 'fab fa-js-square', level: 80 },
  { name: 'TypeScript', icon: 'fab fa-js-square', level: 75 },
  { name: 'Python', icon: 'fab fa-python', level: 70 },
  { name: 'Java', icon: 'fab fa-java', level: 60 },
  { name: 'C#', icon: 'fab fa-microsoft', level: 55 },
]);

const frameworks = ref([
  { name: 'Vue.js', icon: 'fab fa-vuejs', level: 80 },
  { name: 'React', icon: 'fab fa-react', level: 65 },
  { name: 'Node.js', icon: 'fab fa-node-js', level: 70 },
  { name: 'Express.js', icon: 'fas fa-server', level: 65 },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap', level: 85 },
]);

const tools = ref([
  { name: 'Git', icon: 'fab fa-git-alt', level: 75 },
  { name: 'Docker', icon: 'fab fa-docker', level: 60 },
  { name: 'VS Code', icon: 'fas fa-code', level: 90 },
  { name: 'Figma', icon: 'fab fa-figma', level: 70 },
  { name: 'MySQL', icon: 'fas fa-database', level: 65 },
]);

const softSkills = ref([
  'Travail d\'équipe',
  'Résolution de problèmes',
  'Apprentissage rapide',
  'Communication',
  'Gestion du temps',
  'Adaptabilité',
]);
</script>

<style scoped>
.skills-container {
  min-height: 90vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.section-title {
  font-weight: 800;
  font-size: 2.5rem;
}

.header-line {
  width: 50px;
  height: 4px;
  background: white;
  margin: 15px auto;
  border-radius: 2px;
}

.skill-category {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
}

.category-title {
  color: white;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.category-title i {
  color: #ffd700;
}

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: background 0.3s ease;
}

.skill-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.skill-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  font-size: 1.2rem;
  color: #ffd700;
}

.skill-info {
  flex: 1;
}

.skill-name {
  display: block;
  font-weight: 600;
  margin-bottom: 5px;
}

.skill-level {
  display: flex;
  align-items: center;
  gap: 10px;
}

.level-bar {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  overflow: hidden;
}

.level-fill {
  height: 100%;
  background: linear-gradient(90deg, #ffd700, #ff6b6b);
  border-radius: 3px;
  transition: width 0.8s ease;
}

.level-text {
  font-size: 0.8rem;
  font-weight: 600;
  min-width: 35px;
}

.soft-skills-section h3 {
  color: white;
  font-weight: 700;
}

.soft-skill-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.soft-skill-item:hover {
  transform: scale(1.05);
}

.soft-skill-item i {
  color: #ffd700;
}

.fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .section-title { font-size: 2rem; }
  .skill-category { padding: 1.5rem; }
  .skills-grid { gap: 0.8rem; }
}
</style>