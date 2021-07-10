import { createRouter, createWebHistory } from 'vue-router';

import HomeComponent from '../views/home/Home.vue';
import ContactComponent from '../views/contact/Contact.vue';
import AboutComponent from '../views/about/About.vue';
import MovieDetailesComponent from '../views/movie/MovieDetailes.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  }, {
    path: '/about',
    name: 'About',
    component: AboutComponent
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactComponent
  },
  
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetailesComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;