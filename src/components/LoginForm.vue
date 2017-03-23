<template>
  <div>
    <form v-on:submit.prevent="!$v.authData.$invalid && onSubmit">
      <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="email" id="email" v-model="authData.email" @input="$v.authData.email.$touch()">
        <label class="mdl-textfield__label" for="email">Email</label>
      </div>
      <inline-error :errors="$v.authData.email" label="Email"></inline-error>
      <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="password" id="password" v-model="authData.password" @input="$v.authData.password.$touch()">
        <label class="mdl-textfield__label" for="password">Password</label>
      </div>
      <inline-error :errors="$v.authData.password" label="Password"></inline-error>
      <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Sign in
      </button>
      <error-message :message="error"></error-message>
    </form>
  </div>
</template>
<script>
  import { required, minLength, email } from 'vuelidate/lib/validators';
  import ErrorMessage from './ErrorMessage';
  import InlineError from './InlineError';
  import InputWrapper from './InputWrapper';
  import { actionTypes } from '../store/modules/auth';

  export default {
    name: 'loginForm',
    components: {
      ErrorMessage,
      InlineError,
      InputWrapper,
    },
    data() {
      return {
        authData: {
          email: null,
          password: null,
        },
      };
    },
    validations: {
      authData: {
        email: {
          required,
          email,
          minLength: minLength(7),
        },
        password: {
          required,
        },
      },
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
