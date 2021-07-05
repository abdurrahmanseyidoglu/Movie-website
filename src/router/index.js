import { createRouter, createWebHistory } from 'vue-router';

import HomeComponent from '../views/home/Home.vue';
import ContactComponent from '../views/about/About.vue';
import AboutComponent from '../views/about/About.vue';
import LatestComponent from '../views/latest/Latest.vue';
import MoviesComponent from '../views/movies/Movies.vue';
import TvShowsComponent from '../views/tv-shows/TvShows.vue';



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
    path: '/latest',
    name: 'Latest',
    component: LatestComponent
  },
  {
    path: '/movies',
    name: 'Movies',
    component: MoviesComponent
  },
  {
    path: '/tvshows',
    name: 'TvShows',
    component: TvShowsComponent
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;