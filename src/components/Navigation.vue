<template v-mdl>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Categories</span>
    <nav class="mdl-navigation">
      <span v-for="item in categories" class="mdl-navigation__link" href="#">
        <router-link tag="a" :to="'/products/' + item.id" >{{ item.title }}</router-link>
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

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
