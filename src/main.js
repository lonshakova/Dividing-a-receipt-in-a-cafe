import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/router.js'
import { createPinia } from 'pinia'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(createPinia()) 
  .mount('#app')
