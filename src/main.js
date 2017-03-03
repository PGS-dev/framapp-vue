import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import Layout from './components/Layout';
import store from './store/index';
import router from './router';

sync(store, router); // sync vue-router with vuex store

/* eslint-disable no-new */
const createApp = function () {
  Vue.directive('mdl', {
    /* eslint-disable no-undef */
    bind: () => componentHandler.upgradeElement(this.el),
  });

  return new Vue({
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
  });
};

export { createApp, router, store };
