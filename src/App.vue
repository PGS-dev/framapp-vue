<template>
  <div>
    Test
    <router-view class="view"></router-view>
  </div>
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
