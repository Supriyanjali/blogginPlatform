// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase()
})
Vue.directive('rainbow', {
  bind (el, binding, vnode) {
    el.store.color = '#' + Math.random().toString(16).slice(2, 8)
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
