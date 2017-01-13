<template>
  <div>
    <form v-on:submit.prevent="onSubmit">
      <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="email" id="email" v-model="authData.email">
        <label class="mdl-textfield__label" for="email">Email</label>
      </div>
      <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="password" id="password" v-model="authData.password">
        <label class="mdl-textfield__label" for="password">Password</label>
      </div>
      <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          Sign in
      </button>
      <error-message :message="error"></error-message>
    </form>
  </div>
</template>
<script>
  import ErrorMessage from './ErrorMessage';
  import { actionTypes } from '../store/modules/auth';

  export default {
    name: 'loginForm',
    components: {
      ErrorMessage,
    },
    data() {
      return {
        authData: {
          email: null,
          password: null,
        },
      };
    },
    computed: {
      error() {
        return this.$store.state.auth.error;
      },
    },
    methods: {
      onSubmit() {
        this.$store.dispatch(actionTypes.USER_SIGN_IN, this.authData);
      },
    },
  };
</script>
