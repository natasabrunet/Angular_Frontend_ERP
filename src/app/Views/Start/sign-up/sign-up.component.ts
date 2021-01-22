import { Component, OnInit } from '@angular/core';
import { UserSignUp } from 'src/app/Models/newUser';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public new_user:UserSignUp;
  public password_conf:string;
  public check_password:boolean;

  constructor() {
    this.new_user = new UserSignUp('', '', '','');
    this.check_password = false;
  }

  ngOnInit(): void {
  }

  //TODO: hacer pop up de registro correcto onSubmit
  onSubmit(form){
    console.log(this.new_user);
    form.reset();
    setTimeout(()=> alert('Your registration was succesful!'), 1000);
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

