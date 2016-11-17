<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title title">
        <router-link tag="a" to="/">Framapp-Vue</router-link>
      </span>
      <div class="mdl-layout-spacer"></div>
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
