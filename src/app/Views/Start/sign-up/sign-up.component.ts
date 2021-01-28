import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserSignUp } from 'src/app/Models/newUser';

//import services
import { SignupService } from '../../../Services/signup.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public new_user: UserSignUp;
  public password_conf:string;
  public email:string; // FIXME: Temporalmente creado hasta actualización de schema
  public bussinessName:string; // FIXME: Temporalmente creado hasta actualización de schema
  public check_password:boolean;
  public check_eye:boolean;
  public closeResult= '';

  constructor(
    private modalService: NgbModal,
    private signupService:SignupService
  ) {
    this.new_user = new UserSignUp('', '');// FIXME: Temporalmente creado hasta actualización de schema
    this.check_password = false;
    this.check_eye = false;
  }

  ngOnInit(): void {

  }

  onSubmit(form){
    console.log(this.new_user);
    this.signupService.createUser(this.new_user)
        .subscribe(resp => {
          console.log(resp)
        })
    this.email = '';// FIXME: Temporalmente fuera de form hasta actualización de schema
    this.bussinessName = '';// FIXME: Temporalmente fuera de form hasta actualización de schema
    form.reset();
  }

  verPassword1(){
    let password1: HTMLInputElement = (<HTMLInputElement>document.getElementById('password1'));
    if(password1.type === "password"){
       password1.type = "text";
     }else{
       password1.type = "password";
     }

    let eye: HTMLElement = (<HTMLElement>document.getElementById('eye1'));
    if(this.check_eye === false){
      this.check_eye = true;
      eye.classList.remove("fa-eye-slash");
      eye.classList.add("fa-eye");
    }else{
      this.check_eye = false;
      eye.classList.add("fa-eye-slash");
      eye.classList.remove("fa-eye");
    }
  }

  verPassword2(){
    let password_see: HTMLInputElement = (<HTMLInputElement>document.getElementById('password_see'));
    if(password_see.type === "password"){
       password_see.type = "text";
     }else{
       password_see.type = "password";
     }

     let eye: HTMLElement = (<HTMLElement>document.getElementById('eye2'));
     if(this.check_eye === false){
       this.check_eye = true;
       eye.classList.remove("fa-eye-slash");
       eye.classList.add("fa-eye");
     }else{
       this.check_eye = false;
       eye.classList.add("fa-eye-slash");
       eye.classList.remove("fa-eye");
     }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): any {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

