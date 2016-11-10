<template>
  <main>
    <header>Products list</header>
    <section>
      <product v-for="product in products" :data="product" track-by="id">
    </section>
  </main>
</template>

<script>
  import { mapState } from 'vuex';
  import Product from './Product';

  export default {
    components: {
      Product,
    },
    computed: mapState({
      products: state => state.products,
    }),
  };
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
