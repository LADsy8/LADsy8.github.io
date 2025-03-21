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

    <!-- Repos École -->
    <div v-if="schoolRepos.length > 0">
      <h3>Repos École</h3>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div class="col" v-for="repo in schoolRepos" :key="repo.id">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ repo.name }}</h5>
              <p class="card-text">{{ repo.description || 'Aucune description disponible' }}</p>
              <a :href="repo.html_url" class="btn btn-primary" target="_blank">Voir sur Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Repos Personnels -->
    <div v-if="personalRepos.length > 0">
      <h3>Repos Personnels</h3>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div class="col" v-for="repo in personalRepos" :key="repo.id">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ repo.name }}</h5>
              <p class="card-text">{{ repo.description || 'Aucune description disponible' }}</p>
              <a :href="repo.html_url" class="btn btn-primary" target="_blank">Voir sur Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tous les Repos -->
    <div v-if="allRepos.length > 0 && schoolRepos.length === 0 && personalRepos.length === 0">
      <h3>Tous les Repos</h3>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div class="col" v-for="repo in allRepos" :key="repo.id">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ repo.name }}</h5>
              <p class="card-text">{{ repo.description || 'Aucune description disponible' }}</p>
              <a :href="repo.html_url" class="btn btn-primary" target="_blank">Voir sur Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <p>Aucun repo trouvé pour cette catégorie.</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Légère ombre pour les cartes */
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
}

@media (max-width: 767px) {
  .card-body {
    padding: 15px; /* Réduire le padding pour les écrans mobiles */
  }

  .card-title {
    font-size: 1rem; /* Taille de texte réduite sur mobile */
  }

  .card-text {
    font-size: 0.9rem; /* Taille de texte réduite sur mobile */
  }
}
</style>