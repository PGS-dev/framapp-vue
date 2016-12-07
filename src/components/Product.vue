<template>
  <div class="card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand" v-bind:style="{ backgroundImage: 'url(' + this.data.imageUrl + ')' }">
      <h2 class="mdl-card__title-text">{{this.data.title}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {{this.shortDescription}}
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <router-link :to="{ name: 'product', params: { id: this.data.id }}"
                   class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Show details
      </router-link>
    </div>
    <div class="mdl-card__menu">
      <div class="icon material-icons promoted" v-if="this.data.promoted">star</div>
    </div>
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

<style lang="scss" scoped>
.card {
  margin-right: 20px;

  &.mdl-card {
    width: 320px;
    height: 320px;
  }

  > .mdl-card__title, .icon {
    color: #fff;
  }
}

</style>
