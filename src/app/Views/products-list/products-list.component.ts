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
    this.productsService.getProducts()
      .subscribe( data => {
      console.log(data);
    });

    console.log(this.products);
   }

  ngOnInit(): void {
    
  }

  delete( i: number ) {
    console.log(i);
    this.products.splice(i,1);
    console.log(this.products);
  }


}
