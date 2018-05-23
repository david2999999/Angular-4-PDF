// What should we do if we want to test the price method of the Product without relying on this
// external resource? In this case we often mock the PriceService. For example, if we know the
// interface of a PriceService, we could write a MockPriceService which will always give us a
// predictable calculation (and not be reliant on a database or API).
export interface IPriceService {
  calculateTotalPrice(basePrice: number, state: string): number;
}
