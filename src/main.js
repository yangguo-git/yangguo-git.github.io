import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

// vue-photo-preview
// import preview from 'vue-photo-preview'
// import 'vue-photo-preview/dist/skin.css'
// Vue.use(preview)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
