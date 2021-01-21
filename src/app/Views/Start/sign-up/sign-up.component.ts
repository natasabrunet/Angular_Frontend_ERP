import { Component, OnInit } from '@angular/core';
import { UserSignUp } from 'src/app/Models/newUser';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public new_user:UserSignUp;

  constructor() {
    this.new_user = new UserSignUp('', '', '','', '');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.new_user);
    form.reset();
    this.enviarAlert();
  }

  enviarAlert (){
    const editor: HTMLDivElement = (document.getElementById('alert') as HTMLDivElement);
    editor.classList.remove('d-none');
    setTimeout(()=> editor.classList.add('d-none'), 4000);
  }

}

