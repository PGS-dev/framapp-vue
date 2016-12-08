<template v-mdl>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <app-header></app-header>
    <navigation :categories="categories"></navigation>
    <main class="mdl-layout__content">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductsList from './ProductsList';
import AppHeader from './AppHeader';
import Navigation from './Navigation';
import * as actions from '../store/actionTypes';

export default {
  components: {
    ProductsList,
    AppHeader,
    Navigation,
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

  .mdl-layout__content {
    padding: 20px;
  }
</style>
