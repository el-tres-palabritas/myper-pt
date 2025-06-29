import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Nora from '@primeuix/themes/nora'

import App from './App.vue'
import router from './router'
import { Button } from 'primevue'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Nora
    }
})
app.use(createPinia())
app.use(router)
app.component('Button', Button)

app.mount('#app')
