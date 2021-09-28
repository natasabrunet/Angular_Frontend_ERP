import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import {} from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductNoSessionService } from 'src/app/Services/product-no-session.service';
import { Product } from '../../../Models/Product';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-products-without-session',
  templateUrl: './products-without-session.component.html',
  styleUrls: ['./products-without-session.component.scss'],
})
export class ProductsWithoutSessionComponent implements OnInit {
  products: any[];

  public page: number;

  productsCart: number = 0;
  cart = Array();
  showCart;
  productWholesaleCard: number;

  constructor(
    private ProductNoSessionService: ProductNoSessionService,
    private ShoppingCartService: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ProductNoSessionService.getProducts().subscribe(
      (data: any) => {
        this.products = data.products;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goDetailProduct(id: number) {
    this.router.navigate(['/detail-product', id]);
  }
  addToCart(product: Product) {
    this.ShoppingCartService.addItem(product);
  }
  // addProductCart(product) {
  //   this.showCart = <HTMLInputElement>(
  //     document.getElementById('showProductsCard')
  //   );
  //   this.cart.push(product);
  //   this.productsCart++;
  //   console.log(this.cart);
  // }

  addProductWholesaleCart(product) {
    this.ShoppingCartService.addItem(product);
  }
}
