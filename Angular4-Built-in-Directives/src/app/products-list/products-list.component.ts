import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() productList: Product[];
  @Output() productSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() {
    this.productSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(product: Product): void {
    // 1. Set this.currentProduct to the Product that was passed in.
    // 2. Emit the Product that was clicked on our output
    this.currentProduct = product;
    this.productSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct){
      return false;
    }

    return product.sku === this.currentProduct.sku;
  }
}
