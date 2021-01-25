import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: any[];


  constructor( private productsService: ProductsService ) { 


  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    console.log(this.products);
  }

}
