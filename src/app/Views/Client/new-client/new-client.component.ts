import { Component, OnInit } from '@angular/core';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
  iconPenSquare = faPenSquare;
  nameCtrl = new FormControl('',[Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]);
  addressCtrl = new FormControl('',[Validators.required, Validators.pattern(/^[A-Za-z0-9.'\s]*$/)]);
  cifCtrl = new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z]{1}\d{7}[a-zA-Z0-9]{1}$/)]);

  constructor() { }

  ngOnInit(): void {
  }

}
