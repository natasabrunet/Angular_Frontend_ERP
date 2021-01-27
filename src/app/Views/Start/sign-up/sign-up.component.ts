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
  //public user: User;
  public password_conf:string;
  public email:string;
  public bussinessName:string;
  public check_password:boolean;
  public closeResult= '';

  constructor(
    private modalService: NgbModal,
    private signupService:SignupService
  ) {
    this.new_user = new UserSignUp('', '');
    this.check_password = false;
  }

  ngOnInit(): void {

  }

  onSubmit(form){
    console.log(this.new_user);
    this.signupService.createUser(this.new_user)
        .subscribe(resp => {
          console.log(resp)
        })
    form.reset();
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

