/*Let’s imagine we’re building a store that has Products and we need to calculate the final price of that
product after sales tax. In order to calculate the full price for this product, we use a PriceService
that takes as input:
• the base price of the Product and
• the state we’re selling it to.
and then returns the final price of the Product, plus tax:*/

export class PriceService {
  constructor() {}

  calculateTotalPrice(basePrice: number, state: string) {
    // e.g. Imgine that in our "real" application we're
    // accessing a real database of state sales tax amounts
    const tax = Math.random();

    return basePrice + tax;
  }
}
