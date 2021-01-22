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

  constructor() {
    this.new_user = new UserSignUp('', '', '','');
  }

  ngOnInit(): void {
  }

  //TODO: hacer pop up de registro correcto onSubmit
  onSubmit(form){
    console.log(this.new_user);
    form.reset();
    setTimeout(()=> alert('Your registration was succesful!'), 1000);
  }

}

