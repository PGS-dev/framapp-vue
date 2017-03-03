<template>
  <tr>
    <td>{{data.id}}</td>
    <td>{{data.title}}</td>
    <td>
      <button class="mdl-button mdl-js-button" v-on:click="goToEdit()">
        EDIT
      </button>
    </td>
  </tr>
</template>

<script>
  import router from '../router';

  export default {
    name: 'Category',
    props: {
      data: Object,
    },
    methods: {
      goToEdit() {
        router.push({ name: 'category-edit', params: { id: this.data.id } });
      },
    },
  };
</script>

<style scoped>
</style>
