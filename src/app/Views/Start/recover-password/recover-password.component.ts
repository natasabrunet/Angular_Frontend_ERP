import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

	emailCtrl = new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)]);

  constructor() { 
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
