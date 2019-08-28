// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import './common/stylus/index.styl';

/* eslint-disable no-nev */
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

//定义路由
const routes = [
            {path: '/goods', component: goods},
            {path: '/ratings', component: ratings},
            {path: '/seller', component: seller}
];
//创建路由实例
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});
let vm = new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
Vue.use({
  vm
});

