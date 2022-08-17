import {
    createApp
  } from 'vue'
  import App from './App.vue'
  import vuetify from './plugins/vuetify'
  import {
    loadFonts
  } from './plugins/webfontloader'
  import router from './router.js'
  import mixins from './mixins.js'
  import store from './store'
  
  
  loadFonts()
  
  const app = createApp(App)
  app.use(router)
  app.mixin(mixins)
  app.use(store)
  app.use(vuetify)
  app.mount('#app')
  
  window.Kakao.init('84ca65221705129e85093a61407dd1f6')