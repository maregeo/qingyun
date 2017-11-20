// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import css from './assets/css/app.css'
import '../node_modules/vue-awesome-swiper/'
import 'element-ui/lib/theme-chalk/display.css';
import VueAwesomeSwiper from '../node_modules/vue-awesome-swiper'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(css)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h => h(App),
  router,
  template: '<App/>',
  components: { App }
})
