import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/router.js'
import { createPinia } from 'pinia'
import { loadFonts } from './plugins/webfontloader'



loadFonts()
const pinia = createPinia()
const app = createApp(App)
app.use(pinia) 
app.use(router)
app.use(vuetify)
app.mount('#app')

