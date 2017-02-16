<template>
  <div>
  <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
    <thead>
      <tr>
        <th>ID</th>
        <th>Category name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <category v-for="category in categories" :data="category"></category>
    </tbody>
  </table>
  <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" v-on:click="addCategory()">
    ADD
  </button>
</div>
</template>

<script>
  import { mapState } from 'vuex';
  import Category from './Category';
  import router from '../router';
  import { actionTypes as productAction } from '../store/modules/products';

  export default {
    name: 'AdminCategoriesList',
    components: {
      Category,
    },
    methods: {
      addCategory() {
        router.push({ name: 'category-create' });
      },
    },
    computed: mapState({
      categories: state => state.products.categories,
    }),
    created() {
      this.$store.dispatch(productAction.GET_CATEGORIES);
    },
  };
</script>

<style scoped lang="scss">
.mdl-data-table {
  th {
    color: white;
    background-color: #666;
    text-align: center;
  }

  tr:nth-child(even) {
    background-color:  #ccc;
  }
}
</style>
