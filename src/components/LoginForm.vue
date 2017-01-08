<template>
  <div>
    <form v-on:submit.prevent="onSubmit">
      <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" id="username" v-model="username">
        <label class="mdl-textfield__label" for="username">Username</label>
      </div>
      <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="password" id="password" v-model="password">
        <label class="mdl-textfield__label" for="username">Password</label>
      </div>
      <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          Sign in
      </button>
    </form>
  </div>
</template>
<script>
  import { actionTypes } from '../store/modules/user';

  export default {
    name: 'loginForm',
    data() {
      return {
        username: null,
        password: null,
      };
    },
    methods: {
      onSubmit() {
        this.$store.dispatch(actionTypes.USER_SIGN_IN);
      },
    },
  };
</script>
