import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

// Vue 3 Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

// Element Plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import './assets/main.css';
import './assets/font/font.css';
import 'spinkit/spinkit.min.css';

import 'spinkit/spinkit.min.css';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.use(Buefy);

app.mount('#app');
