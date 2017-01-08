import Vuex from 'vuex';
import Vue from 'vue';
import firebase from 'firebase';

import products from './modules/products';
import user from './modules/user';
import { FIREBASE_CONFIG } from '../config';


Vue.use(Vuex);
firebase.initializeApp(FIREBASE_CONFIG);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  strict: debug,
  modules: {
    products,
    user,
  },
});

export default store;
