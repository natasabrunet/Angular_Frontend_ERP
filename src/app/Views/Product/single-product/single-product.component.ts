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
  product:any = [];
  idProduct:number; 
 
  constructor(
    private productsService: ProductsService,
    private _router: ActivatedRoute) 

  {
    //Recuperamos el parámetro (id) con el que se llama desde la lista de productos y 
    this._router.params.subscribe( params => {
      this.productsService.getProduct( params ['id'] )
        .subscribe( (data:any) => {
          this.product = data.product;
      }) //Llamamos al servicio que accede a la API para recuperar la info del producto y lo movemos a la propiedad product para que se cargue en la vista
      
      this.idProduct = params['id']; //Guardamos el ID para poder usarlo en todo el componente (necesario para update y delete)
       
    })
  }


  //Llamamos al servicio que accede a la API para añadir un nuevo producto
  add( ){
    this.productsService.addProduct ( this.product.name, this.product.stock, this.product.image, this.product.price )
      .subscribe(producto => {
        console.log( producto );
      })
  }

  //Llamamos al servicio que accede a la API para modificar un producto por ID
  update( id: number, name: string, stock:number, image: string, price:number ) {
    this.productsService.updateProduct( id, this.product.name, this.product.stock, this.product.image, this.product.price )
      .subscribe();
  }  
  
  //Llamamos al servicio que accede a la API para eliminar un producto por ID
  delete( id: number ) {
    this.productsService.deleteProduct( id )
      .subscribe();
  }
  ngOnInit(): void {

  }



}

