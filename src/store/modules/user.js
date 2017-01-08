import firebase from 'firebase';

export const actionTypes = {
  USER_SIGN_IN: 'USER_SIGN_IN',
  USER_SIGN_OUT: 'USER_SIGN_OUT',
};

const state = {
  user: null,
};

const mutationTypes = {
  USER_SIGNED_IN_SUCCESS: 'USER_SIGNED_IN_SUCCESS',
  USER_SIGNED_IN_ERROR: 'USER_SIGNED_IN_ERROR',
  USER_SIGNED_OUT: 'USER_SIGNED_OUT',
  USER_SIGNED_OUT_ERROR: 'USER_SIGNED_OUT_ERROR',
};

const mutations = {
  [mutationTypes.USER_SIGNED_IN](state, { user }) {
    state.user = user;
  },
  [mutationTypes.USER_SIGNED_OUT](state) {
    state.user = null;
  },
};

const actions = {
  [actionTypes.USER_SIGN_IN](context, email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => context.commit(mutations.USER_SIGNED_IN_SUCCESS, { user }));
    // .catch(({ code, message }) => {
    //   var errorCode = code;
    //   var errorMessage = message;
    // });
  },
  [actionTypes.USER_SIGN_OUT](context) {
    firebase.auth().signOut().then(() => context.commit(mutations.USER_SIGNED_OUT_SUCCESS),
      // (error) => {
      //   // An error happened.
      // }
    );
  },
};

export default {
  state,
  actions,
  mutations,
};
