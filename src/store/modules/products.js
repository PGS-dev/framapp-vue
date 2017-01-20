import filter from 'lodash/filter';
import map from 'lodash/map';

import FIREBASE_URL from '../../config';

export const actionTypes = {
  GET_PRODUCTS: 'products/GET_PRODUCTS',
  GET_CATEGORIES: 'products/GET_CATEGORIES',
};

const mutationTypes = {
  GET_CATEGORIES_SUCCESS: 'products/GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAILURE: 'products/GET_CATEGORIES_FAILURE',
  GET_PRODUCTS_SUCCESS: 'products/GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE: 'products/GET_PRODUCTS_FAILURE',
};

const state = {
  categories: [],
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
    state.categories = map(categories, (v, k) => ({ ...v, id: k }));
  },
  [mutationTypes.GET_CATEGORIES_FAILURE](state) {
    state.categories = {};
  },
  [mutationTypes.GET_PRODUCTS_SUCCESS](state, { products }) {
    state.products = filter(products, 'id');
  },
  [mutationTypes.GET_PRODUCTS_FAILURE](state) {
    state.products = {};
  },
};

const getters = {
  categoriesWithURL(state) {
    return map(state.categories, v => ({ ...v, url: `/products/${v.id}` }));
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
