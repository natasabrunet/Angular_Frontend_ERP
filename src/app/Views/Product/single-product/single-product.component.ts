import { Component, OnInit } from '@angular/core';
import { faPenSquare  } from '@fortawesome/free-solid-svg-icons';
  
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  iconPenSquare = faPenSquare; 
  constructor() { }
 
  ngOnInit(): void {
  }
 
}
