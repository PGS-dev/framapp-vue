import Vue from 'vue';
import App from './App';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
}); // end of new Vue

Vue.directive('mdl', {
  /* eslint-disable no-undef */
  bind: () => componentHandler.upgradeElement(this.el),
});

