import { createApp } from 'vue'
import './style.css'
import 'virtual:uno.css'
import 'uno.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: setupLayouts(generatedRoutes),
})


const app = createApp(App)
app.use(router)
app.use(ElementPlus);
app.mount('#app')
