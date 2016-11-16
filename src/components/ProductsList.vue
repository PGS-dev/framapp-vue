<template>
  <main>
    <section>
      <product v-for="product in productsFiltered" :data="product" track-by="id"></product>
    </section>
  </main>
</template>

<script>
  import { mapState } from 'vuex';
  import Product from './Product';
  import * as actions from '../store/actionTypes';

  export default {
    components: {
      Product,
    },
    computed: mapState({
      productsFiltered(state) {
        const products = state.products.products;
        const keys = Object.keys(state.products.products);
        return keys.reduce((acc, key) => {
          if (products[key].category === this.$route.params.category) {
            acc[key] = products[key];
          }
          return acc;
        }, {});
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
