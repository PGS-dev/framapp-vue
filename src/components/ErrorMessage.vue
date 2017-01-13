<template>
  <div class="error" v-if="message">
    {{ message }}
  </div>
</template>

<script>
  export default {
    name: 'ErrorMessage',
    props: {
      message: String,
    },
  };

</script>

<style lang="scss" scoped>
.error {
  background-color: firebrick;
  color: white;
  padding: 15px;
  border-radius: 5px;
}

</style>
