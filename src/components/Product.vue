<template>
  <div class="card">
    <img :src="this.data.photo"/>
    <title>{{this.data.name}}</title>
    <div>{{this.data.description}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object,
    },
  };
</script>

<style scoped>
  .card {
    width: 300px;
    padding: 10px;
  }

  img {
    height: 200px;
    display: block;
  }
</style>
