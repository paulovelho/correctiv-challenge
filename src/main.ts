import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FeedService from './shared/services/feed.service'


import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'

const feed = new FeedService();
feed.populate();

library.add(fas);
dom.watch();

createApp(App)
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount('#app');
