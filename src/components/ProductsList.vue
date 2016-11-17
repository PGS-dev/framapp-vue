<template>
  <main>
    <section>
      <product v-for="product in productsFiltered" :data="product" track-by="id"></product>
    </section>
  </main>
</template>

<script>
  import { filter } from 'lodash';
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
        return filter(products, item => item.category === this.$route.params.category);
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
