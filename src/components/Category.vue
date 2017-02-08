<template>
  <tr>
    <td>{{data.id}}</td>
    <td>{{data.title}}</td>
    <td>EDIT</td>
  </tr>
</template>

<script>
  export default {
    name: 'Category',
    props: {
      data: Object,
    },
  };
</script>

<style scoped>
</style>
