import { Component, OnInit } from '@angular/core';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { FormControl, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
  closeResult = '';
  iconPenSquare = faPenSquare;
  nameCtrl = new FormControl('',[Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]);
  addressCtrl = new FormControl('',[Validators.required, Validators.pattern(/^[A-Za-z0-9.',\s]*$/)]);
  cifCtrl = new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z]{1}\d{7}[a-zA-Z0-9]{1}$/)]);

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  //pop-up informative window
  open(content) {
    this.modalService.open((content), {centered: true, ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }



  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
