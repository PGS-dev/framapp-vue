<template>
  <div>
    <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
      <thead>
      <tr>
        <th>ID</th>
        <th>Product name</th>
        <th>Category</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="product in products">
          <td>{{product.id}}</td>
          <td>{{product.title}}</td>
          <td>{{product.category}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { actionTypes as productAction } from '../store/modules/products';

  export default {
    name: 'AdminProductsList',
    computed: mapState({
      products: state => state.products.products,
    }),
    created() {
      this.$store.dispatch(productAction.GET_PRODUCTS);
    },
  };

</script>

<style>
  TABLE {
    width: 100%;
  }
</style>
