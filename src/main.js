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

window.Kakao.init('abcfc7160e0157444020e2e4611e46db')