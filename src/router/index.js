import { createRouter, createWebHistory } from 'vue-router';

import HomeComponent from '../views/home/Home.vue';
import ContactComponent from '../views/about/About.vue';
import AboutComponent from '../views/about/About.vue';


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
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;