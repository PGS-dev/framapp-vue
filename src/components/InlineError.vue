<template>
  <div class="error">
    {{ state }}
  </div>
</template>

<script>
  export default {
    name: 'InlineError',
    props: {
      state: Object,
    },
  };

</script>

<style lang="scss" scoped>
  .error {
    color: firebrick;
  }

</style>
