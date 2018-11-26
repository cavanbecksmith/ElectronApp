import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import $ from 'jquery';
import PopperJs from 'popper.js';
window.$ = $;
require('bootstrap');

Vue.use(VueRouter);

let routes = [{
    path: '/',
    component: require('./pages/Home.vue').default
}]

const router = new VueRouter({
  routes // short for `routes: routes`
})

console.log('hey');
new Vue({
  name: 'app',
  el: '#app',
  render: (h) => h(App),
  router
});