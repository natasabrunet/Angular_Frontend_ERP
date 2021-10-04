import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';

import { ProductEmitterService } from '../../../../Services/product-emitter.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;
  constructor(private ProductEmitterService: ProductEmitterService) {}

  ngOnInit(): void {}

  //This emit the product
  addToCart() {
    this.ProductEmitterService.SendDataProduct(this.productItem);
  }
  addProductWholesaleCart() {
    alert('wholeSales are not available at this moment!');
  }
}
