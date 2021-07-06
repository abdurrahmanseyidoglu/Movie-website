import { createApp } from 'vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
import router from './router';
import Main from './Main.vue';
createApp(Main)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount('[app]');
