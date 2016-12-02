<template>
  <div class="card">
    <img :src="this.data.imageUrl"/>
    <div class="icon material-icons promoted" v-if="this.data.promoted">star</div>
    <title>{{this.data.title}}</title>
    <div>{{this.shortDescription}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object,
    },
    computed: {
      shortDescription() {
        const desc = this.data.description ? this.data.description : '';
        return desc.length > 100 ? `${desc.substr(0, 100)}...` : desc;
      },
    },
  };
</script>

<style scoped>
  .card {
    width: 200px;
    padding: 10px;
    position: relative;
  }

  img {
    height: 200px;
    display: block;
  }

  .promoted {
    position: absolute;
    right: 15px;
    top: 180px;
  }
</style>
