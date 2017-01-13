<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title title">
        <router-link tag="a" to="/">Framapp-Vue</router-link>
      </span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <router-link v-if="!user" tag="button" to="/login" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          Sign In
        </router-link>
        <a v-if="user" v-on:click="signOut" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          Sign Out
        </a>
      </nav>
    </div>
  </header>
</template>

<script>

  export default {
    name: 'AppHeader',
    computed: {
      user() {
        return this.$store.getters.user;
      },
    },
    methods: {
      signOut() {
        this.$store.dispatch('USER_SIGN_OUT'); // TODO: Getting strange error when importing actionTypes in this file
      },
    },
  };
</script>

<style scoped lang="scss">
  .mdl-layout-title {
    a {
      color: white;
      text-decoration: none;
    }
  }
</style>
