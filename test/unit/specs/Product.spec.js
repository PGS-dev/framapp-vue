import Product from 'src/components/Product';
import getRenderedText from '../testHelpers';

describe('Product.vue', () => {
  it('renders correctly with different props', () => {
    const vm = getRenderedText(Product, {
      data: {
        title: 'Name1',
        description: 'Description1',
        imageUrl: 'http://placehold.it/300x200',
      },
    });
    expect(vm.$el.querySelector('.card title').textContent).to.equal('Name1');
    expect(vm.$el.querySelector('.card div').textContent).to.equal('Description1');
    expect(vm.$el.querySelector('.card img').src).to.equal('http://placehold.it/300x200');
  });

  it('renders correctly when there is no description', () => {
    const vm = getRenderedText(Product, {
      data: {
        name: 'Name1',
        photo: '//url',
      },
    });
    expect(vm.$el.querySelector('.card div').textContent).to.equal('');
  });
});
