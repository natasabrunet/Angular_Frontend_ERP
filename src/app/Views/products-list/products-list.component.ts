import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  //Icons
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;


  products: any[];


  constructor( private productsService: ProductsService ) { 
    
   }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe( (data: any) => {
        this.products = data.products;
    });
    
  }

  delete( i: number ) {
    const id = this.products[i].id;

    this.productsService.deleteProduct(id)
      .subscribe();
    this.products.splice(i,1);
    console.log(this.products);
  }


}
