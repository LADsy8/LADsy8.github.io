export const projects = [
  {
    id: 'air-metique',
    title: 'Air-Métique',
    description: 'Système de surveillance de la qualité de l’air avec ESP32.',
    fullDescription: 'Une description plus longue ici expliquant les capteurs BME680...',
    media: [
      { type: 'image', url: '/img/air-metique-1.jpg', caption: 'Prototype V1' },
      { type: 'video', url: '/videos/demo-tva.mp4', caption: 'Extrait de l’entrevue TVA' },
      { type: 'image', url: '/img/air-metique-pcb.jpg', caption: 'Conception du circuit' }
    ],
    technologies: ['Vue.js', 'Firebase', 'C++', 'ESP32']
  }
];