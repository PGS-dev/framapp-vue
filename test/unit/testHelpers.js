import Vue from 'vue';

const getRenderedText = (Component, propsData) => {
  const Ctor = Vue.extend(Component);
  return new Ctor({ propsData }).$mount();
};

export default getRenderedText;
