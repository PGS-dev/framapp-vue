<template>
  <products-list></products-list>
</template>

<script>
import ProductsList from './components/ProductsList';
import store from './store/index';

export default {
  store,
  components: {
    ProductsList,
  },
};
</script>
