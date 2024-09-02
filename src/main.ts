import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FeedService from './shared/services/feed.service'

const feed = new FeedService();
feed.populate();
createApp(App).mount('#app');
