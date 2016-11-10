<template>
  <div class="card">
    <div class="card-photo">
      <img :src="this.data.photo"/>
    </div>
    <h2>{{this.data.name}}</h2>
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

  .card-photo {
    height: 200px;
  }
</style>
