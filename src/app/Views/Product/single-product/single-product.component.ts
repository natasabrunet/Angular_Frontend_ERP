import { Component, OnInit } from '@angular/core';
import { faPenSquare  } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
  
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  iconPenSquare = faPenSquare; 
  idProduct:number;

  constructor(
    private _router: ActivatedRoute ) 
  { 
    /*Con este código recupero el parámetro con el que se llama*/
    this._router.params.subscribe( params => {
      this.idProduct = params['id'];
    })
  }
 
  ngOnInit(): void {
  }
 
}
