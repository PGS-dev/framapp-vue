<template>
  <div class="error">
    <p v-if="!errors.required && errors.$dirty">{{label}} jest wymagany</p>
    <p v-if="errors.required && errors.$invalid && errors.$dirty">{{label}} błędny</p>
  </div>
</template>

<script>
  export default {
    name: 'InlineError',
    props: {
      errors: Object,
      label: String,
    },
  };

</script>

<style lang="scss" scoped>
  .error {
    color: firebrick;
  }

</style>
