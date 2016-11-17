import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductsList from './components/ProductsList';
import Layout from './components/Layout';
import store from './store/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/products/', component: ProductsList },
    { path: '/products/:category', component: ProductsList },
  ],
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  components: {
    Layout,
  },
  template: `
    <div id="app">
      <layout>
        <router-view class="view"></router-view>
      </layout>
    </div>
  `,
}).$mount('#app');

Vue.directive('mdl', {
  /* eslint-disable no-undef */
  bind: () => componentHandler.upgradeElement(this.el),
});