// In this service, the calculateTotalPrice function will take the basePrice of a product and the
// state and return the total price of product.
//   Say we want to use this service on our Product model. Here’s how it could look without dependency
// injection:
import {PriceService} from './price.service.1';
import {IPriceService} from './price-service.interface';

export class Product {
  service: PriceService;
  basePrice: number;

  // Now, when creating a Product the client using the Product class becomes responsible for
  // deciding which concrete implementation of the PriceService is going to be given to the new
  // instance.
  // And with this change, we can tweak our test slightly and get rid of the dependency on the
  // unpredictable PriceService:
  constructor(service: IPriceService, basePrice: number) {
    this.service = service;
    this.basePrice = basePrice;
  }

  totalPrice(state: string) {
    return this.service.calculateTotalPrice(this.basePrice, state);
  }
}
