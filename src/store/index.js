import Vuex from 'vuex';
import Vue from 'vue';
import products from './modules/products';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    products,
  },
});

export default store;
