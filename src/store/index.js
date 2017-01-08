import Vuex from 'vuex';
import Vue from 'vue';
import products from './modules/products';
import user from './modules/user';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  strict: debug,
  modules: {
    products,
    user,
  },
});

export default store;
