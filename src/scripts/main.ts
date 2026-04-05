import { createApp } from 'vue'
import '../style/style.css'
import App from '../App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import router from './router'

const app = createApp(App);

app.use(router);
app.mount('#app');

// Initialiser AOS après le montage
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});
