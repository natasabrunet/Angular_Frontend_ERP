import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  public closeResult= '';

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute
  ) {
    this.new_user = new UserSignUp('', '', '','');
    this.check_password = false;
  }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.name = params['sign-up'];
    // });
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
}

