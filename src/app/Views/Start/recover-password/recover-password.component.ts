import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

	closeResult = '';
	emailCtrl = new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)]);

  constructor(private modalService: NgbModal) { 
	  this.emailCtrl.valueChanges
	  .pipe(
		  debounceTime(500)
		  )
	  .subscribe( value =>{console.log(value);
	})
  }

  ngOnInit(): void {
  }

  getEmail(event:Event){
	event.preventDefault();
	console.log(this.emailCtrl.value);
}

open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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


// function validate(){
// 	var errorEmail, emailField;
// 	var emailTest = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
// 	errorEmail = document.getElementById("emailError");
// 	errorEmail.innerHTML = "";
// 	emailField = document.getElementById("email").value;

// if(emailTest.test(emailField)==false){
// 	errorEmail.innerHTML = "Please, enter a valid e-mail";
// 	}
// }
