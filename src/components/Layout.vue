<template v-mdl>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <app-header></app-header>
    <div class="mdl-layout__drawer">
      <navigation :items="categories" title="Categories"></navigation>
      <navigation :items="adminLinks" title="Admin"></navigation>
    </div>
    <main class="mdl-layout__content">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import ProductsList from './ProductsList';
import AppHeader from './AppHeader';
import Navigation from './Navigation';
import { actionTypes as productActions } from '../store/modules/products';

export default {
  components: {
    ProductsList,
    AppHeader,
    Navigation,
  },
  data() {
    return {
      adminLinks: [
        {
          url: '/admin/products',
          title: 'Products',
        },
        {
          url: '/admin/categories',
          title: 'Categories',
        },
      ],
    };
  },
  computed: {
    categories() {
      return this.$store.getters.categoriesWithURL;
    },
  },
  created() {
    this.$store.dispatch(productActions.GET_CATEGORIES);
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
