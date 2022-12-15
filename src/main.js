import { createApp } from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(require('vue3-shortkey')).use(VueParticles).mount('#app')
