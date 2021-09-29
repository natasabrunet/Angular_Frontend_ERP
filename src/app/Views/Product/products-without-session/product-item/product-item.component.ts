import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;
  constructor() {}

  ngOnInit(): void {}
  addToCart() {
    alert('adding product');
  }
  addProductWholesaleCart() {
    alert('adding product');
  }
}
