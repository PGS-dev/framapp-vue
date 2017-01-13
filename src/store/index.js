import Vuex from 'vuex';
import Vue from 'vue';
import firebase from 'firebase';

import products from './modules/products';
import auth from './modules/auth';
import { FIREBASE_CONFIG } from '../config';


Vue.use(Vuex);
firebase.initializeApp(FIREBASE_CONFIG);

// const debug = process.env.NODE_ENV !== 'production';
const debug = false;

const store = new Vuex.Store({
  strict: debug,
  modules: {
    products,
    auth,
  },
});

export default store;
