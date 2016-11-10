<template v-mdl>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Framapp-Vue</span>
        <div class="mdl-layout-spacer"></div>
      </div>
    </header>
    <div class="mdl-layout__drawer">
    <nav class="mdl-navigation">
      <a v-for="categ in categs" class="mdl-navigation__link" href="#">
          {{ categ.title }}
      </a>
    </nav>
    </div>
  <main class="mdl-layout__content">
    <products-list></products-list>
  </main>
  </div>
</template>

<script>
import FIREBASE_URL from '../config';
import ProductsList from './ProductsList';

export default {
  components: {
    ProductsList,
  },
  data() {
    return {
      categs: {},
    };
  },
  created() {
    fetch(FIREBASE_URL, { method: 'GET' })
      .then(response => response.json())
      .then((json) => {
        this.categs = json;
      })
      .catch(error => console.log(error));
  },
};
</script>

<style scoped>
  .moveDown {
    margin-top: 65px;
  }
</style>
