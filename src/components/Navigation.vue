<template v-mdl>
  <div>
    <span class="mdl-layout-title">{{ title }}</span>
    <nav class="mdl-navigation">
      <span v-for="item in items">
        <router-link :to="item.url"
                     active-class="active"
                     class="mdl-navigation__link"
                     exact>
          <a>{{ item.title }}</a>
        </router-link>
      </span>
    </nav>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      items: Array,
    },
  };
</script>

<style lang="scss" scoped>

  .mdl-layout-title {
    line-height: 64px;
    padding-left: 40px;
    background-color: #ddd;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .active {
    background-color: #c0c0c0;
  }
</style>
