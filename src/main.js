import Vue from 'vue';
import Vuelidate from 'vuelidate';
import { sync } from 'vuex-router-sync';
import Layout from './components/Layout';
import store from './store/index';
import router from './router';

Vue.use(Vuelidate);

sync(store, router); // sync vue-router with vuex store

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
