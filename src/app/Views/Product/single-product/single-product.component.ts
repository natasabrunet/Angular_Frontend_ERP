import { Component, OnInit } from '@angular/core';
import { faPenSquare  } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  iconPenSquare = faPenSquare; 

  product:any = {
    "id": 22, 
    "name": "Cervezas", 
    "stock": 148, 
    "image": "assets/images/img-sample-product_900x600.jpg", 
    "family": "ejemplo familia",
    "price": 5,
    "vat": 21,
    "wholesale_price": 2.50,
    "wholesale_quantity": 500
  };

  idProduct:number; 
 
  constructor(
    private productsService: ProductsService,
    private _router: ActivatedRoute) 
  {
    /*Con este código recupero el parámetro con el que se llama*/
    this._router.params.subscribe( params => {
      this.getProduct( params ['id'] );
      this.idProduct = params['id'];
    })
  } 
   
  /*Con esta función llamo al servicio que accede a la API para que me devuelva los datos de un producto por ID*/
  getProduct( id: number ){
    this.productsService.getProduct ( id )
      .subscribe(producto => {
        console.log( producto );
      })
  }


  /*Con esta función llamo al servicio que accede a la API para eliminar un producto por ID */
  delete( id: number ) {
    this.productsService.deleteProduct( id )
      .subscribe();
  }

  /*Con esta función llamo al servicio que accede a la API para modificar un producto por ID */
    update( id: number, name: string, stock:number, image: string, price:number ) {
      this.productsService.updateProduct( this.product.id, this.product.name, this.product.stock, this.product.image, this.product.price )
        .subscribe();
  }

  /*Con esta función llamo al servicio que accede a la API para modificar un producto por ID */
/*   add( name: string, stock:number, image: string, price:number ) {
    this.productsService.addProduct( this.product.name, this.product.stock, this.product.image, this.product.price )
      .subscribe();
  } */

  add( ){
    this.productsService.addProduct ( this.product.name, this.product.stock, this.product.image, this.product.price )
      .subscribe(producto => {
        console.log( producto );
      })
  }

  ngOnInit(): void {}


}
