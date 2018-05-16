import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'NICEHAT',
        'Black Hat',
        'https://cdn.shopify.com/s/files/1/1898/2583/products/CA-U-_-BLK-BRJM001__167_31fb0c06-' +
                '77bb-409d-8c09-cf110a910f16_1024x1024.jpg?v=1492635434',
        ['Men', 'Accessories', 'Hats'],
        29.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        'https://images-na.ssl-images-amazon.com/images/I/915rL8htN0L._SY400_.jpg',
        ['Men', 'Apparel', 'Jacket & Vest'],
        200.99
        ),
      new Product(
        'EARING',
        'Diamond Earing',
        'https://bnsec.bluenile.com/bluenile/is/image/bluenile/-' +
        'diamond-halo-earrings-platinum-/50674_main?rgn=343,535,1224,792&$v2_phab_detailmain_lrg$',
        ['Women', 'Accessories','Gems'],
        999.99
      )
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ' + product);
  }
}
