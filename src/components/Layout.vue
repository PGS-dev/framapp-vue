<template v-mdl>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <app-header></app-header>
    <div class="mdl-layout__drawer">
    <nav class="mdl-navigation">
      <span v-for="item in categories" class="mdl-navigation__link" href="#">
          <router-link class="mdl-navigation__link" :to="'/products/' + item.id" >{{ item.title }}</router-link>
      </span>
    </nav>
    </div>
  <main class="mdl-layout__content">
    <slot></slot>
  </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductsList from './ProductsList';
import AppHeader from './AppHeader';
import * as actions from '../store/actionTypes';

export default {
  components: {
    ProductsList,
    AppHeader,
  },
  computed: mapState({
    categories: state => state.products.categories,
  }),
  created() {
    this.$store.dispatch(actions.GET_CATEGORIES);
  },
};
</script>

<style scoped>
  .moveDown {
    margin-top: 65px;
  }
</style>
