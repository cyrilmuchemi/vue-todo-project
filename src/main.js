import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

let theme = localStorage.getItem('theme');

if (theme!=null){
    document.querySelector('body').className = theme;
}


createApp(App).mount('#app')
