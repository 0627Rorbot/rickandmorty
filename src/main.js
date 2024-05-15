import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import '../node_modules/flowbite-vue/dist/index.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)    

app.use(pinia)
app.mount('#app')
