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
    <div class="page-content"><h1>Main content served by Vue Router</h1></div>
  </main>

  </div>


</template>

<script>

var axios = require('axios');

export default {
  data() {
    return {
      categs: {}
    }
  },



  created : function () {
        var self = this;

        axios.get('https://project-5613440220430148247.firebaseio.com/api/v1/categories.json')
          .then(function (response) {
            console.log(response);
            self.categs = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
  } // end of created
} // end of export default

</script>

<style scoped>
.moveDown {
  margin-top: 65px;
}


</style>



