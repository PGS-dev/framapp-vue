import filter from 'lodash/filter';
import map from 'lodash/map';
import find from 'lodash/find';

import FIREBASE_URL from '../../config';

export const actionTypes = {
  GET_PRODUCTS: 'products/GET_PRODUCTS',
  GET_CATEGORIES: 'products/GET_CATEGORIES',
  GET_CATEGORY: 'products/GET_CATEGORY',
};

const mutationTypes = {
  GET_CATEGORIES_SUCCESS: 'products/GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAILURE: 'products/GET_CATEGORIES_FAILURE',
  GET_PRODUCTS_SUCCESS: 'products/GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE: 'products/GET_PRODUCTS_FAILURE',
  GET_CATEGORY_SUCCESS: 'products/GET_CATEGORY_SUCCESS',
  GET_CATEGORY_FAILURE: 'products/GET_CATEGORY_FAILURE',
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
  [actionTypes.GET_CATEGORY](context, id) {
    fetch(`${FIREBASE_URL}categories/${id}.json`)
      .then(response => response.json())
      .then(category => context.commit(mutationTypes.GET_CATEGORY_SUCCESS, { category }))
      .catch(() => context.commit(mutationTypes.GET_CATEGORY_FAILURE));
  },
};

const mutations = {
  [mutationTypes.GET_CATEGORIES_SUCCESS](state, { categories }) {
    state.categories = map(categories, (v, k) => ({ ...v, id: k }));
  },
  [mutationTypes.GET_CATEGORIES_FAILURE](state) {
    state.categories = [];
  },
  [mutationTypes.GET_PRODUCTS_SUCCESS](state, { products }) {
    state.products = filter(products, 'id');
  },
  [mutationTypes.GET_PRODUCTS_FAILURE](state) {
    state.products = {};
  },
  [mutationTypes.GET_CATEGORY_SUCCESS](state, { category }) {
    if (!find(state.categories, item => item.id === category.id)) {
      state.categories.push(category);
    }
  },
  [mutationTypes.GET_CATEGORY_FAILURE]() {},
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
