import * as mutationTypes from '../mutationTypes';
import * as actionTypes from '../actionTypes';

import FIREBASE_URL from '../../config';

const state = {
  categories: {},
  products: {},
};

const actions = {
  [actionTypes.GET_CATEGORIES](context) {
    fetch(`${FIREBASE_URL}categories.json`)
      .then(response => response.json())
      .then(categories => context.commit(mutationTypes.GET_CATEGORIES_SUCCESS, { categories }))
      .catch(() => context.commit(mutationTypes.GET_CATEGORIES_FAILURE));
  },
  [actionTypes.GET_PRODUCTS](context) {
    fetch(`${FIREBASE_URL}products.json`)
      .then(response => response.json())
      .then(products => context.commit(mutationTypes.GET_PRODUCTS_SUCCESS, { products }))
      .catch(() => context.commit(mutationTypes.GET_PRODUCTS_FAILURE));
  },
};

const mutations = {
  [mutationTypes.GET_CATEGORIES_SUCCESS](state, { categories }) {
    state.categories = categories;
  },
  [mutationTypes.GET_PRODUCTS_SUCCESS](state, { products }) {
    state.products = products;
  },
};

export default {
  state,
  actions,
  mutations,
};
