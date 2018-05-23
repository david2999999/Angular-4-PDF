import {MockPriceService} from './price.service.mock';
import {Product} from './product.model.1';

describe('Product', () => {
  let product;

  beforeEach(() => {
    const service = new MockPriceService();
    product = new Product(service, 11.00);
  });

  describe('price', () => {
    it('is calculate based on the baseprice and the state', () => {
      expect(product.totalPrice('FL').toBe(11.66));
    });
  });
});


/*We also get the bonus of having confidence that we’re testing the Product class in isolation. That
is, we’re making sure that our class works with a predictable dependency.
While the predictability is nice, it’s a bit laborious to pass a concrete implementation of a service
every time we want a new Product.*/
