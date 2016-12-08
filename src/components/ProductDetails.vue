<template>
  <div v-if="product" class="card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title" v-bind:style="{ backgroundImage: 'url(' + product.imageUrl + ')' }">
      <h2 class="mdl-card__title-text">{{product.title}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {{product.description}}
    </div>
    <div class="mdl-card__menu">
      <div class="icon material-icons promoted" v-if="product.promoted">star</div>
    </div>
  </div>
</template>

<script>
  import find from 'lodash/find';
  import { mapState } from 'vuex';
  import * as actions from '../store/actionTypes';

  export default {
    name: 'ProductDetails',
    computed: mapState({
      product(state) {
        const products = state.products.products;
        const selectedId = this.$route.params.id;
        return find(products, item => item.id === selectedId);
      },
    }),
    created() {
      if (!this.product) {
        this.$store.dispatch(actions.GET_PRODUCTS);
      }
    },
  };

</script>

<style lang="scss" scoped>

  .card {
    width: 512px;
    margin: 0 auto;

    .icon {
      color: #fff;
    }

    > .mdl-card__title {
      color: #fff;
      height: 176px;
    }
  }

</style>
