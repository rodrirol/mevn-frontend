import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios';
import axios from 'axios';
// axios.defaults.withCredentials = true;

const app = createApp(App)

app.use(router)

app.use(VueAxios, axios)

app.config.globalProperties.$baseURL = 'https://mevn-backend.vercel.app'

app.mount('#app')
