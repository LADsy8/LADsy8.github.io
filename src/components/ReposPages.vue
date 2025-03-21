<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const allRepos = ref<any[]>([]); // Repos non filtrés
const schoolRepos = ref<any[]>([]); // Repos avec 'ecole' dans la description
const personalRepos = ref<any[]>([]); // Repos avec 'personnel' dans la description

const fetchRepos = async (category: string) => {
  let url = `https://api.github.com/users/ladsy8/repos`; // URL de base pour tous les repos

  try {
    // Récupérer tous les repos
    const response = await fetch(url);
    const data = await response.json();
    allRepos.value = data;  // Stocke tous les repos

    // Filtrer les repos par mots-clés dans la description
    schoolRepos.value = data.filter((repo: any) =>
      repo.description && repo.description.toLowerCase().includes("ecole")
    );

    personalRepos.value = data.filter((repo: any) =>
      repo.description && repo.description.toLowerCase().includes("personnel")
    );

    // Si la catégorie est 'school', on n'affiche que les repos scolaires
    if (category === 'school') {
      schoolRepos.value = data.filter((repo: any) =>
        repo.description && repo.description.toLowerCase().includes("ecole")
      );
      personalRepos.value = []; // On vide la catégorie personnelle
    }
    // Si la catégorie est 'personal', on n'affiche que les repos personnels
    else if (category === 'personal') {
      personalRepos.value = data.filter((repo: any) =>
        repo.description && repo.description.toLowerCase().includes("personnel")
      );
      schoolRepos.value = []; // On vide la catégorie scolaire
    }
    // Si la catégorie est 'all', on affiche tous les repos sans filtrer
    else if (category === 'all') {
      schoolRepos.value = []; // On vide la catégorie scolaire
      personalRepos.value = []; // On vide la catégorie personnelle
    }

  } catch (error) {
    console.error('Erreur lors de la récupération des repos:', error);
  }
};

onMounted(() => {
  const category = route.params.category as string;
  fetchRepos(category); // Appeler la fonction de récupération des repos
});
</script>

<template>
  <div class="container py-5">
    <h2 class="text-center mb-4">Liste des Repos</h2>

    <!-- Affichage des repos pour la catégorie 'school' -->
    <div v-if="schoolRepos.length > 0">
      <h3>Repos École</h3>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="repo in schoolRepos" :key="repo.id">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ repo.name }}</h5>
              <p class="card-text">{{ repo.description || 'Aucune description disponible' }}</p>
              <a :href="repo.html_url" class="btn btn-primary" target="_blank">Voir sur Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Affichage des repos pour la catégorie 'personal' -->
    <div v-if="personalRepos.length > 0">
      <h3>Repos Personnels</h3>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="repo in personalRepos" :key="repo.id">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ repo.name }}</h5>
              <p class="card-text">{{ repo.description || 'Aucune description disponible' }}</p>
              <a :href="repo.html_url" class="btn btn-primary" target="_blank">Voir sur Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Affichage de tous les repos si aucun repo scolaire ou personnel -->
    <div v-if="allRepos.length > 0 && schoolRepos.length === 0 && personalRepos.length === 0">
      <h3>Tous les Repos</h3>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="repo in allRepos" :key="repo.id">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ repo.name }}</h5>
              <p class="card-text">{{ repo.description || 'Aucune description disponible' }}</p>
              <a :href="repo.html_url" class="btn btn-primary" target="_blank">Voir sur Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Si aucun repo n'est trouvé pour cette catégorie -->
    <div v-else>
      <p>Aucun repo trouvé pour cette catégorie.</p>
    </div>
  </div>
</template>


<style scoped>
/* Vous pouvez ajouter des styles spécifiques à ce composant */
</style>