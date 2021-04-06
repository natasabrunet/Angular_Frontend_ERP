import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserSignUpDto } from 'src/app/Models/DTOs/newUserDto';

//import services
import { SignupService } from '../../../Services/signup.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  regexCIF = /^[a-zA-Z]{1}\d{7}[a-zA-Z0-9]{1}$/;
  regexEmail = /^[a-z0-9._%+-]+@[a-z0-9·-]+.[a-z]{2,4}$/;
  regexPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/;
  regexZIP = /\b\d{5}\b/g;

  new_user: UserSignUpDto;

  closeResult = '';

  constructor(private modalService: NgbModal, private signupService: SignupService, private fb: FormBuilder) {
    this.createForm();
    //this.new_user = new UserSignUpDto(this.signUpForm.value);
  }

  ngOnInit(): void {

  }

  createForm() {
    this.signUpForm = this.fb.group({
      inputName: ['', [Validators.required, Validators.minLength(3)]],
      inputSurname: ['', [Validators.required, Validators.minLength(3)]],
      inputDNI: ['', this.validateDNI],
      address: this.fb.group({
        inputAddress: ['', Validators.required],
        inputCity: ['', [Validators.required, Validators.minLength(2)]],
        inputProvince: ['', Validators.required], // no s'actualitza el valor!!!!!!!
        inputZIP: ['', [Validators.required, Validators.pattern(this.regexZIP)]],
      }),
      inputCIF: ['', [Validators.required, Validators.pattern(this.regexCIF)]],
      inputEmail: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
      inputPassword: ['123!aB123', [Validators.required, Validators.pattern(this.regexPassword)]],
      inputRepeatPass: ['123!aB123', Validators.required]
    })
  }

  onSubmit() {
    this.new_user = new UserSignUpDto(this.signUpForm.value);
    this.signupService.createUser(this.new_user)
      .subscribe(resp => {
        console.log(resp)
      })
    this.signUpForm.reset();
  }

  validateDNI(inputDNI) {
    const value = inputDNI.value;
    const dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";

    if (/^(\d{8})[a-zA-Z]$/.test(value)) {
      const number = value.substr(0, value.length - 1);
      const letter = value.charAt(value.length - 1);
      const calc = number % 23;
      const correctLetter = dni_letters.charAt(calc);

      if (letter.toUpperCase() == correctLetter) {
        return null;
      } else {
        return { validateDNI: 'The letter do not match with the numbers' }
      }

    } else {
      return { validateDNI: 'DNI required (8 numbers and 1 letter)' }
    }
  }

  showPassword(inputPass: string, eyeIcon: string) {
    let inputPassword: HTMLInputElement = (<HTMLInputElement>document.getElementById(inputPass));
    let icon: HTMLInputElement = (<HTMLInputElement>document.getElementById(eyeIcon));

    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    } else if (inputPassword.type === 'text') {
      inputPassword.type = 'password';
      icon.classList.add("fa-eye-slash");
      icon.classList.remove("fa-eye");
    }
  }

  isValidInput(name: string): boolean {
    const input: any = this.signUpForm.get(name);
    return input.touched && input.invalid
  }

  matchPasswords() {
    const pass1 = this.signUpForm.get('inputPassword').value;
    const pass2 = this.signUpForm.get('inputRepeatPass').value;

    return (pass1 === pass2) ? false : true;
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

