<template>
  <layout></layout>
</template>

<script>
import Layout from './components/Layout';
import store from './store/index';

export default {
  store,
  components: {
    Layout,
  },
};
</script>
