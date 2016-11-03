<template>
  <main>
    <header>Products list</header>
    <section>
      <product v-for="product in products" :data="product" track-by="id">
    </section>
  </main>
</template>

<script>
  import Product from './Product';

  export default {
    components: {
      Product,
    },
    data: () => ({
      products: [{
        id: 0,
        name: 'Product 1',
        description: 'Sweet tart sweet toffee brownie ice cream toffee cookie.' +
          'Toffee halvah chocolate bar donut. Candy cake brownie jelly bonbon biscuit.',
        price: 2000,
        photo: 'http://placehold.it/300x200',
      }, {
        id: 1,
        name: 'Product 2',
        description: 'Lemon drops lollipop pastry sweet roll jelly beans topping tart icing jelly-o.' +
          'Caramels bonbon muffin chocolate bar marzipan pie lemon drops cotton candy biscuit',
        price: 2000,
        photo: 'http://placehold.it/300x200',
      }, {
        id: 2,
        name: 'Product 3',
        description: 'Danish gummies gingerbread chocolate danish chocolate bar chocolate cake.' +
          'Powder danish carrot cake cake wafer pastry pie jelly-o.',
        price: 2000,
        photo: 'http://placehold.it/300x200',
      }, {
        id: 3,
        name: 'Product 4',
        description: 'Sweet tart sweet toffee brownie ice cream toffee cookie.' +
          'Toffee halvah chocolate bar donut. Candy cake brownie jelly bonbon biscuit.',
        price: 2000,
        photo: 'http://placehold.it/300x200',
      }, {
        id: 4,
        name: 'Product 5',
        description: 'Lemon drops lollipop pastry sweet roll jelly beans topping tart icing jelly-o.' +
          'Caramels bonbon muffin chocolate bar marzipan pie lemon drops cotton candy biscuit',
        price: 2000,
        photo: 'http://placehold.it/300x200',
      }, {
        id: 5,
        name: 'Product 6',
        description: 'Danish gummies gingerbread chocolate danish chocolate bar chocolate cake.' +
          'Powder danish carrot cake cake wafer pastry pie jelly-o.',
        price: 2000,
        photo: 'http://placehold.it/300x200',
      }, {
        id: 6,
        name: 'Product 7',
        description: 'Sweet tart sweet toffee brownie ice cream toffee cookie.' +
          'Toffee halvah chocolate bar donut. Candy cake brownie jelly bonbon biscuit.',
        price: 2000,
        photo: 'http://placehold.it/300x200',
      }, {
        id: 7,
        name: 'Product 8',
        description: 'Lemon drops lollipop pastry sweet roll jelly beans topping tart icing jelly-o.' +
          'Caramels bonbon muffin chocolate bar marzipan pie lemon drops cotton candy biscuit',
        price: 2000,
        photo: 'http://placehold.it/300x200',
      }, {
        id: 8,
        name: 'Product 9',
        description: 'Danish gummies gingerbread chocolate danish chocolate bar chocolate cake.' +
          'Powder danish carrot cake cake wafer pastry pie jelly-o.',
        price: 2000,
        photo: 'http://placehold.it/300x200',
      }],
    }),
  };
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
