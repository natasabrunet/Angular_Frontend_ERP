import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-contact',
  templateUrl: './client-contact.component.html',
  styleUrls: ['./client-contact.component.scss'],
})
export class ClientContactComponent implements OnInit {
  selectedOption: string = '';
  contactOptions: string[] = [
    'Información producto',
    'Proceso de compra',
    'Pago y facturación',
    'Envíos y devoluciones',
    'Ofertas',
    'Otra consulta',
  ];
  showSelected() {}
  constructor() {}

  clientSubmit() {
    alert('enviando');
  }
  ngOnInit(): void {}
}
