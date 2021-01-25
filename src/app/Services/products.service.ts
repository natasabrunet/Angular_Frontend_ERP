import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/newProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      name: "Product1",
      stock: 7,
      price: 13.15,
      image: "assets/images/product1.jpg"
    },
    {
      name: "Product2",
      stock: 7,
      price: 13.15,
      image: "assets/images/product2.jpg"
    },
    {
      name: "Product3",
      stock: 7,
      price: 13.15,
      image: "assets/images/product3.jpg"
    },
    {
      name: "Product4",
      stock: 7,
      price: 13.15,
      image: "assets/images/product4.jpg"
    }
  ];


  constructor() {
    console.log('Service working');
   }

   getProducts(): Product[] {
     return this.products; 
   }
}
