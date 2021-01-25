import { Component, OnInit } from '@angular/core';
import { UserSignUp } from 'src/app/Models/newUser';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public new_user:UserSignUp;
  public password_conf:string;
  public check_password:boolean;
  public closeResult= '';

  constructor(
    private modalService: NgbModal
  ) {
    this.new_user = new UserSignUp('', '', '','');
    this.check_password = false;
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.new_user);
    form.reset();
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

  // mostrarPassword(password:string){
  //   let cambio = (<HTMLDivElement>document.getElementById('show_password'));
	// 	if(this.check_password === false){
  //     cambio.classList.remove('fa-eye-slash');
  //     cambio.classList.add('fa-eye');
  //     this.check_password = true;
	// 	}else{
  //     cambio.classList.remove('fa-eye');
  //     cambio.classList.add('fa-eye-slash');
  //     this.check_password = false;
	// 	}
  // }

  // mostrarPassword2(){
  //   let cambio = (<HTMLDivElement>document.getElementById('show_password2'));
	// 	if(this.check_password === false){
  //     cambio.classList.remove('fa-eye-slash');
  //     cambio.classList.add('fa-eye');
	// 		this.check_password = true;
	// 	}else{
  //     cambio.classList.remove('fa-eye');
  //     cambio.classList.add('fa-eye-slash');
  //     this.check_password = false;
	// 	}
	// }

}

