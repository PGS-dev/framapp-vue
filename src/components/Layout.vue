<template v-mdl>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Framapp-Vue</span>
        <div class="mdl-layout-spacer"></div>
      </div>
    </header>
    <div class="mdl-layout__drawer">
    <nav class="mdl-navigation">
      <a v-for="item in categories" class="mdl-navigation__link" href="#">
          {{ item.title }}
      </a>
    </nav>
    </div>
  <main class="mdl-layout__content">
    <products-list></products-list>
  </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductsList from './ProductsList';
import * as actions from '../store/actionTypes';

export default {
  components: {
    ProductsList,
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
