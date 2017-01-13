import firebase from 'firebase';
import router from '../../router';

export const actionTypes = {
  USER_SIGN_IN: 'USER_SIGN_IN',
  USER_SIGN_OUT: 'USER_SIGN_OUT',
};

const state = {
  user: null,
  error: null,
};

const mutationTypes = {
  USER_SIGNED_IN_SUCCESS: 'USER_SIGNED_IN_SUCCESS',
  USER_SIGNED_IN_ERROR: 'USER_SIGNED_IN_ERROR',
  USER_SIGNED_OUT_SUCCESS: 'USER_SIGNED_OUT_SUCCESS',
  USER_SIGNED_OUT_ERROR: 'USER_SIGNED_OUT_ERROR',
};

const mutations = {
  [mutationTypes.USER_SIGNED_IN_SUCCESS](state, { user }) {
    state.user = user;
    state.error = null;
  },
  [mutationTypes.USER_SIGNED_IN_ERROR](state, { error }) {
    state.error = error.message;
  },
  [mutationTypes.USER_SIGNED_OUT_SUCCESS](state) {
    state.user = null;
    state.error = null;
  },
  [mutationTypes.USER_SIGNED_OUT_ERROR](state, { error }) {
    state.error = error.message;
  },
};

const actions = {
  [actionTypes.USER_SIGN_IN](context, { email, password }) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (user) => {
          context.commit(mutationTypes.USER_SIGNED_IN_SUCCESS, { user });
          router.push({ name: 'admin-products' });
        },
        error => context.commit(mutationTypes.USER_SIGNED_IN_ERROR, { error })
      );
  },
  [actionTypes.USER_SIGN_OUT](context) {
    firebase.auth().signOut()
      .then(
        () => {
          context.commit(mutationTypes.USER_SIGNED_OUT_SUCCESS);
          router.push({ path: '/' });
        },
        error => context.commit(mutationTypes.USER_SIGNED_OUT_ERROR, { error })
      );
  },
};

const getters = {
  user(state) {
    return state.user;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
