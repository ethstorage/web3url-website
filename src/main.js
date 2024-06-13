import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import ElementUI from 'element-ui';
import router from './router'

import './assets/main.css'
import './assets/font/font.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'buefy/dist/buefy.css';
import 'spinkit/spinkit.min.css';

Vue.use(ElementUI);
Vue.use(Buefy);

Vue.config.productionTip = false;
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
