// In this service, the calculateTotalPrice function will take the basePrice of a product and the
// state and return the total price of product.
//   Say we want to use this service on our Product model. Here’s how it could look without dependency
// injection:
import {PriceService} from './price.service.1';

export class Product {
  service: PriceService;
  basePrice: number;

  constructor(basePrice: number) {
    this.service = new PriceService();
    this.basePrice = basePrice;
  }

  totalPrice(state: string) {
    return this.service.calculateTotalPrice(this.basePrice, state);
  }
}
