<template>
  <main>
    <section>
      <product v-for="product in products" :data="product" track-by="id"></product>
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
      products: state => state.products.products,
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
