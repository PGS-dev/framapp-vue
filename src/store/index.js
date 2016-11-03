import Vuex from 'vuex';
import Vue from 'vue';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    products: [{
      id: 0,
      name: 'Product 1',
      description: 'Sweet tart sweet toffee brownie ice cream toffee cookie.' +
        'Toffee halvah chocolate bar donut. Candy cake brownie jelly bonbon biscuit.',
      price: 2000,
      photo: 'http://lorempixel.com/300/200/cats/1',
    }, {
      id: 1,
      name: 'Product 2',
      description: 'Lemon drops lollipop pastry sweet roll jelly beans topping tart icing jelly-o.' +
        'Caramels bonbon muffin chocolate bar marzipan pie lemon drops cotton candy biscuit',
      price: 2000,
      photo: 'http://lorempixel.com/300/200/cats/2',
    }, {
      id: 2,
      name: 'Product 3',
      description: 'Danish gummies gingerbread chocolate danish chocolate bar chocolate cake.' +
        'Powder danish carrot cake cake wafer pastry pie jelly-o.',
      price: 2000,
      photo: 'http://lorempixel.com/300/200/cats/3',
    }, {
      id: 3,
      name: 'Product 4',
      description: 'Sweet tart sweet toffee brownie ice cream toffee cookie.' +
        'Toffee halvah chocolate bar donut. Candy cake brownie jelly bonbon biscuit.',
      price: 2000,
      photo: 'http://lorempixel.com/300/200/cats/4',
    }, {
      id: 4,
      name: 'Product 5',
      description: 'Lemon drops lollipop pastry sweet roll jelly beans topping tart icing jelly-o.' +
        'Caramels bonbon muffin chocolate bar marzipan pie lemon drops cotton candy biscuit',
      price: 2000,
      photo: 'http://lorempixel.com/300/200/cats/5',
    }, {
      id: 5,
      name: 'Product 6',
      description: 'Danish gummies gingerbread chocolate danish chocolate bar chocolate cake.' +
        'Powder danish carrot cake cake wafer pastry pie jelly-o.',
      price: 2000,
      photo: 'http://lorempixel.com/300/200/cats/6',
    }, {
      id: 6,
      name: 'Product 7',
      description: 'Sweet tart sweet toffee brownie ice cream toffee cookie.' +
        'Toffee halvah chocolate bar donut. Candy cake brownie jelly bonbon biscuit.',
      price: 2000,
      photo: 'http://lorempixel.com/300/200/cats/7',
    }, {
      id: 7,
      name: 'Product 8',
      description: 'Lemon drops lollipop pastry sweet roll jelly beans topping tart icing jelly-o.' +
        'Caramels bonbon muffin chocolate bar marzipan pie lemon drops cotton candy biscuit',
      price: 2000,
      photo: 'http://lorempixel.com/300/200/cats/8',
    }, {
      id: 8,
      name: 'Product 9',
      description: 'Danish gummies gingerbread chocolate danish chocolate bar chocolate cake.' +
        'Powder danish carrot cake cake wafer pastry pie jelly-o.',
      price: 2000,
      photo: 'http://lorempixel.com/300/200/cats/9',
    }],
  },
  actions,
  mutations,
});

export default store;
