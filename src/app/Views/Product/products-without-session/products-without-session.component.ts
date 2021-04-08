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

  currentPage: number;
  totalPages: number;
  pageToGo: number;
  pagesArray: Array<number>;

  constructor(
    private productsService: ProductsService,
    private router: Router) {
      this.currentPage = 1;
    }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe(
        (data: any) => {
          this.products = data.products;
        },
        error => {
          console.log(error);
        });
    this.goToPage(this.currentPage); 
  }

  goDetailProduct(id: number) {
    this.router.navigate(['/detail-product', id]);
  }

  //Pagination

    isLastPage() {
      return this.currentPage == this.totalPages;
    }
  
    isFirstPage() {
      return this.currentPage == 1;
    }

    gotoNextPage(): boolean {
      let _pageNumber = this.currentPage + 1;
      if (_pageNumber > this.totalPages) {
        _pageNumber = this.totalPages;
      }
      this.goToPage(_pageNumber);
  
      return false;
    }
    gotoPrevPage(): boolean {
      let _pageNumber = this.currentPage - 1;
      if (_pageNumber < 1) {
        _pageNumber = 1;
      }
      this.goToPage(_pageNumber);
  
      return false;
    }
  
    goToPage(pageNumber: number): boolean {
      if (pageNumber > this.totalPages) {
        pageNumber = this.totalPages;
      }
      this.pagesArray = new Array();
      this.productsService.getProductsPagination(this.productsService.productsPerPage, pageNumber - 1)
      .subscribe((data: any) => {
        this.currentPage = pageNumber;
        this.products = data.ProductsOfThePage;
        this.totalPages = this.getTotalPages(data.totalProducts, this.productsService.productsPerPage);
        this.setupArrayOfPages();
        this.pageToGo = null;
      });
      return false;
    }
  
    getTotalPages(totalProducts: number, productsPerPage: number) :number {
      let _totalPages = 0;
      if (productsPerPage > 0) {
        _totalPages = Math.ceil(totalProducts / productsPerPage);
      }
      return _totalPages;
    }
  
    setupArrayOfPages() {
      this.pagesArray = new Array();
      if (this.totalPages > 0) {
        this.pagesArray = Array(this.totalPages - 1);
        for (let i=0; i<this.totalPages; i++) {
          this.pagesArray[i] = i+1;
        }
      }
    }
    
    numSequence(n: number): Array<number> { 
      return Array(n); 
  } 

}
