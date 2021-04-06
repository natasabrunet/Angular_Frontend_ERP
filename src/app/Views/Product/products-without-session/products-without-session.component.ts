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

  //Icons
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

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

  delete(i: number) {
    const id = this.products[i].id;

    this.productsService.deleteProduct(id)
      .subscribe();
    this.products.splice(i, 1);
  }

  //Función para que se abra la página de single product
  goSingleProduct(id: number) {
    this.router.navigate(['/single-product', id]);
  }

}
