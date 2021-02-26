import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'

createApp(App).use(store).use(router).use(Vuex).mount('#app')