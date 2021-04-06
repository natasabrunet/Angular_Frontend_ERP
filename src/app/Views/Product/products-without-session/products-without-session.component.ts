import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-without-session',
  templateUrl: './products-without-session.component.html',
  styleUrls: ['./products-without-session.component.scss']
})
export class ProductsWithoutSessionComponent implements OnInit {

  products: any[];

  constructor(
    private productsService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe(
        (data: any) => {
          this.products = data.products;
        },
        error => {
          console.log(error);
        });

  }

  //Función para que se abra la página de single product
  goSingleProduct(id: number) {
    this.router.navigate(['/single-product', id]);
  }

}
