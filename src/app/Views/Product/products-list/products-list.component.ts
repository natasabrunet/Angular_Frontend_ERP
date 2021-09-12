import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

const PAGE_SIZE = 5;

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  //Icons
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  products: any[] = [];

  page: number = 0;
  limit: number = 5;

  paginatedProducts: any[];
  pagesArray: number[];

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  nextPage(): void {
    this.page += PAGE_SIZE;
    this.limit += PAGE_SIZE;
    this.paginatedProducts = this.products.slice(this.page, this.limit);
  }

  currentPage(): number {
    const result = this.page / PAGE_SIZE
    return result
  }

  goToPage(index: number) {

    this.page = index * PAGE_SIZE;
    this.limit = this.page + PAGE_SIZE
    this.paginatedProducts = this.products.slice(this.page, this.limit);
  };

  getTotalPages() {
    return Math.ceil(this.products.length / PAGE_SIZE)
  }

  setPagesArray(): void {
    this.pagesArray = [...new Array<number>(this.getTotalPages()).keys()];
  }

  previousPage(): void {
    this.page -= PAGE_SIZE;
    this.limit -= PAGE_SIZE;
    this.paginatedProducts = this.products.slice(this.page, this.limit);
  }

  isFirstPage(): boolean {
    return this.page === 0
  }

  isLastPage(): boolean {
    return this.limit >= this.products.length
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (data: any) => {
        this.products = data.products;
        this.paginatedProducts = this.products.slice(this.page, this.limit);
        this.setPagesArray();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  delete(i: number) {
    const id = this.products[i].id;

    this.productsService.deleteProduct(id).subscribe();
    this.products.splice(i, 1);
  }

  //Función para que se abra la página de single product
  goSingleProduct(id: number) {
    this.router.navigate(['/single-product', id]);
  }
}
