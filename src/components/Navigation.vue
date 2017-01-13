<template v-mdl>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Categories</span>
    <nav class="mdl-navigation">
      <span v-for="item in categories">
        <router-link :to="'/products/' + item.id"
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
      categories: Object,
    },
  };
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}

.active {
  background-color: #c0c0c0;
}
</style>
