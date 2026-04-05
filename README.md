# Portfolio - Étudiant en Informatique

Un portfolio moderne et responsive développé avec Vue.js 3, TypeScript et Vite, présentant mes compétences et projets en développement web.

## 🚀 Fonctionnalités

- **Design Moderne** : Interface élégante avec animations AOS et mode sombre
- **Responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Performance** : Build optimisé avec Vite, lazy loading des images
- **SEO** : Meta tags, sitemap, et robots.txt configurés
- **Accessibilité** : Labels ARIA, contrastes adaptés, navigation clavier
- **Tests** : Tests unitaires (Vitest) et E2E (Playwright)
- **CI/CD** : Pipeline GitHub Actions pour déploiement automatique

## 🛠️ Technologies Utilisées

### Frontend
- **Vue.js 3** - Framework JavaScript progressif
- **TypeScript** - JavaScript typé pour plus de robustesse
- **Vite** - Outil de build ultra-rapide
- **Vue Router** - Routage côté client

### UI/UX
- **Bootstrap 5** - Framework CSS responsive
- **FontAwesome** - Icônes vectorielles
- **AOS** - Animations au scroll
- **CSS Variables** - Thème sombre/clair

### Outils de Développement
- **ESLint** - Linting du code
- **Prettier** - Formatage automatique
- **Vitest** - Tests unitaires
- **Playwright** - Tests end-to-end
- **GitHub Actions** - CI/CD

### API
- **GitHub API** - Récupération des repositories
- **EmailJS** - Envoi d'emails (formulaire de contact)

## 📁 Structure du Projet

```
src/
├── components/ui/          # Composants UI réutilisables
│   ├── Header.vue         # Navigation principale
│   └── Footer.vue         # Pied de page
├── composables/           # Logique réutilisable
│   ├── useGithub.ts       # API GitHub
│   └── useTheme.ts        # Gestion du thème
├── types/                 # Types TypeScript
│   └── github.ts          # Interfaces API GitHub
├── utils/                 # Utilitaires
│   └── validation.ts      # Validation des formulaires
├── views/                 # Pages principales
│   ├── Home.vue          # Page d'accueil
│   ├── About.vue         # À propos
│   ├── Skills.vue        # Compétences
│   ├── Contact.vue       # Contact
│   └── ReposPage.vue     # Projets
├── scripts/               # Scripts principaux
│   ├── main.ts           # Point d'entrée
│   └── router.ts         # Configuration des routes
└── style/                # Styles globaux
    └── style.css         # Variables CSS et thème
```

## 🏃‍♂️ Démarrage Rapide

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/votre-username/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts Disponibles
```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run preview      # Prévisualisation du build
npm run test         # Tests unitaires
npm run test:e2e     # Tests E2E
npm run lint         # Linting du code
npm run format       # Formatage avec Prettier
```

## 🧪 Tests

### Tests Unitaires
```bash
npm run test
```
Tests les composables et utilitaires avec Vitest.

### Tests E2E
```bash
npm run test:e2e
```
Tests end-to-end avec Playwright (nécessite le serveur de dev en arrière-plan).

## 🚀 Déploiement

Le projet est configuré pour un déploiement automatique sur GitHub Pages via GitHub Actions.

### Déploiement Manuel
```bash
# Build du projet
npm run build

# Les fichiers sont générés dans le dossier dist/
# Déployer le contenu de dist/ sur votre hébergement
```

## 🔧 Configuration

### Variables d'Environnement
Créer un fichier `.env` à la racine :
```env
# GitHub API (optionnel)
VITE_GITHUB_TOKEN=votre_token_github

# EmailJS
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key

# Analytics (optionnel)
VITE_GA_TRACKING_ID=votre_id_google_analytics
```

### Personnalisation
- Modifier les données dans `src/views/` pour personnaliser le contenu
- Ajuster les couleurs dans `src/style/style.css`
- Configurer les compétences dans `src/views/Skills.vue`

## 📊 Performance

- **Lighthouse Score** : 95+ sur mobile et desktop
- **Bundle Size** : ~120KB gzippé
- **First Contentful Paint** : < 1s
- **Time to Interactive** : < 2s

## 🤝 Contribution

Les contributions sont les bienvenues ! Veuillez :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Votre Nom**
- Portfolio : [https://votre-username.github.io](https://votre-username.github.io)
- LinkedIn : [Votre profil LinkedIn](https://linkedin.com/in/votreprofil)
- Email : votre-email@exemple.com

---

⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !
