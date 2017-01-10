<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title title">
        <router-link tag="a" to="/">Framapp-Vue</router-link>
      </span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <router-link tag="button" to="/login" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          Login
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader',
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
