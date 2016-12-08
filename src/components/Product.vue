<template>
  <div class="card mdl-card">
    <img :src="this.data.imageUrl"/>
    <title>{{this.data.title}}</title>
    <div>{{this.shortDescription}}</div>
    <div class="mdl-card__menu">
        <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"  >
            <i class="material-icons">share</i>
            <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span>
        </button>
    </div>
  </div>
</template>

<script>
  import favoritesMix from '../mixins/favoritesMix';

  export default {
    mixins: [favoritesMix],
    props: {
      data: Object,
    },
    computed: {
      shortDescription() {
        const desc = this.data.description;
        return desc.length > 100 ? `${desc.substr(0, 100)}...` : desc;
      },
    },
  };
</script>

<style scoped>
  .card {
    width: 200px;
    padding: 10px;
  }

  img {
    height: 200px;
    display: block;
  }
</style>
