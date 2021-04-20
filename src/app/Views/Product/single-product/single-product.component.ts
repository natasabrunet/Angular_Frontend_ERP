import { Component, OnInit, ɵConsole } from '@angular/core';
import { faPenSquare, faArrowLeft  } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';



@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  iconPenSquare = faPenSquare; 
  iconArrowLeft = faArrowLeft; 
  product:any = [];
  idProduct:number; 
  errorAPI:boolean;
  errorMessage:string;
  success:string;
  action:string;

  constructor(
    private productsService: ProductsService,
    private _router: ActivatedRoute) 

  {
    //Recuperamos el parámetro (id) con el que se llama desde la lista de productos y 
    this._router.params.subscribe( params => {
      this.productsService.getProduct( params ['id'] )
        .subscribe( (data:any) => {
         if (this.idProduct!=0){ //Si estamos en modo update, recuperamos los valores del producto en la vista
            this.product = data.product
          }
      }) //Llamamos al servicio que accede a la API para recuperar la info del producto y lo movemos a la propiedad product para que se cargue en la vista
      
      this.idProduct = params['id']; //Guardamos el ID para poder usarlo en todo el componente (necesario para update y delete)
       
    })
  }

  uploadImage(){
    var imgName = (<HTMLInputElement>document.getElementById('file-upload')).files[0].name;
    this.product.image = "../../assets/images/" + imgName;
    console.log(this.product.image);
    console.log(imgName);
  };

  
  add(){
    this.action = 'add';
    this.productsService.addProduct ( this.product.name, this.product.stock, this.product.image, this.product.price )
    .subscribe(
      ( producto:any ) => {
      this.errorAPI = false
      this.success=producto.success;  
      this.messageManagement( producto );  
      console.log(producto);
      

    }, ( errorServicio:any ) => {
      this.errorAPI = true;
      this.messageManagement( errorServicio ); 
      console.log(errorServicio);
    }); 
    console.log("mioo" + this.product.name + this.product.stock + this.product.image);
  }
  
  //Llamamos al servicio que accede a la API para modificar un producto por ID
  update( id: number, name: string, stock:number, image: string, price:number ) {
    this.action = 'upd';
    this.productsService.updateProduct( id, this.product.name, this.product.stock, this.product.image, this.product.price )
    .subscribe(
      ( producto:any ) => {
      this.errorAPI = false;
      this.success=producto.success;  
      this.messageManagement( producto );
      console.log(producto);
              
    }, ( errorServicio ) => {
      this.errorAPI = true;
      this.messageManagement( errorServicio ); 
      console.log(errorServicio);
    });  
  }
 
    
 //Llamamos al servicio que accede a la API para eliminar un producto por ID
  delete( id: number ) {
    this.action = 'dlt'
    this.productsService.deleteProduct( id )
    .subscribe(
      ( response:any ) => {
      this.errorAPI = false;
      this.success=response.success;  
      this.messageManagement( response );
      console.log(response);        

    }, ( errorServicio ) => {
      this.errorAPI = true;
      this.messageManagement( errorServicio ); 
      console.log(errorServicio);
    });  
  }


  //Gestion de mensajes y errores para el usuario
  messageManagement( param:any )  {
    const alertMessage = document.getElementById( "alertMessage" );
    if( this.errorAPI==true || ( this.errorAPI==false &&  param.success=="false" ) ){
      alertMessage.classList.add( "alert-danger" );
      alertMessage.classList.remove( "visually-hidden" );
      this.errorMessage = param.message;
      
    } else {
      alertMessage.classList.add( "alert-success" );
      alertMessage.classList.remove( "visually-hidden", "alert-danger" ); 
      if ( this.action == 'add' || this.action == 'dlt' ) {
        this.product=[]; 
      }
    }
  }

  hiddeMessage(){
    const alertMessage = document.getElementById( "alertMessage" );
    alertMessage.classList.add( "visually-hidden" );
  }

 
  ngOnInit( ): void {

  }

}

