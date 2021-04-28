import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PasswordRecoveryService } from 'src/app/Services/password-recovery.service';
// import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  body:{} = {"username":""};
  message:{}={"message":""}
	closeResult = '';
	emailCtrl = new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)]);
  
  constructor(private modalService: NgbModal, private recoverService:PasswordRecoveryService) { 
  }
  
  ngOnInit(): void {
  }
  
  getEmail(event:Event){
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }

  open(content) {
    //onSubmit
    const user : string = (<HTMLInputElement>document.getElementById('email')).value;
    this.body = {
      username : user
    }
    this.recoverService.passwordRecovery(this.body).subscribe(data=>{this.message = data});
    this.modalService.open(content,{ centered: true, ariaLabelledBy: 'modal-basic-title'});
    this.message = {"message":""}
  }
}