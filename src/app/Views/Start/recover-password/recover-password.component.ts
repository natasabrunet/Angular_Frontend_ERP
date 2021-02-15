import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// import { debounceTime } from 'rxjs/operators';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RecoverService } from 'src/app/Services/recover.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

	closeResult = '';
	emailCtrl = new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)]);

  constructor(private modalService: NgbModal, private recoverService:RecoverService) { 
  }

  ngOnInit(): void {
  }

  getEmail(event:Event){
	event.preventDefault();
	console.log(this.emailCtrl.value);
}


open(content) {
  //onSubmit
  console.log("hola");
  
  const user = (<HTMLInputElement>document.getElementById('email')).value;
  this.recoverService.editUser(user);
  console.log(user);




  //popUp email sent
    this.modalService.open(content,{ centered: true, ariaLabelledBy: 'modal-basic-title'  } ).result.then((result) => {
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




