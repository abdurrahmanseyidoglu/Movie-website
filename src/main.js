import { createApp } from 'vue';
import router from './router';
import Main from './Main.vue';
// import ContactComponent from "./views/contact/Contact.vue";
createApp(Main)
  .use(router)
  .mount('[app]')
  