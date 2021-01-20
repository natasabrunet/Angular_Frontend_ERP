import { Component } from '@angular/core';

///////////////////////
// Bootstrap imports //
///////////////////////

// TODO: before production, review B5 imports you realy used. comment out those not used!

import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/dropdown'; // npm i @popperjs/core
import 'bootstrap/js/dist/collapse'; // ~navbar, ~transitions, ~accordion
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/toast';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/tooltip'; // npm i @popperjs/core
import 'bootstrap/js/dist/popover'; // npm i @popperjs/core
import 'bootstrap/js/dist/scrollspy'; // onepage or section
import 'bootstrap/js/dist/button'; // ~toggle buttons on/of state
import 'bootstrap/js/dist/tab'; // tabbable panes of local content

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ITProject-ERP-Frontend';
}
