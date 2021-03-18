import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import './assets/style/reset.css'

import Vant from 'vant';
import 'vant/lib/index.css';

createApp(App).use(store).use(router).use(Vuex).use(Vant).mount('#app')