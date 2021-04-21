import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  shipAddress:boolean;
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
 