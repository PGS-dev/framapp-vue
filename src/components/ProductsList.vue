<template>
  <main>
    <section>
      <product v-for="product in productsFiltered" :data="product"></product>
    </section>
  </main>
</template>

<script>
  import filter from 'lodash/filter';
  import { mapState } from 'vuex';
  import Product from './Product';
  import * as actions from '../store/actionTypes';

  export default {
    name: 'ProductsList',
    components: {
      Product,
    },
    computed: mapState({
      productsFiltered(state) {
        const products = state.products.products;
        const selectedCategory = this.$route.params.category;
        const isRoot = this.$route.path === '/';
        if (isRoot) {
          return filter(products, item => item.promoted);
        }
        if (selectedCategory) {
          return filter(products, item => item.category === selectedCategory);
        }
        return products;
      },
    }),
    created() {
      this.$store.dispatch(actions.GET_PRODUCTS);
    },
  };
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
