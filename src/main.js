import { createApp } from 'vue'
import './style.css'
import Vue3Autocounter from 'vue3-autocounter';
import App from './App.vue'

createApp(App)
    .component('vue3-autocounter', Vue3Autocounter)
    .mount('#app')
