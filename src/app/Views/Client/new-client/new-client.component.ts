import { Component, OnInit } from '@angular/core';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ClientsService } from 'src/app/Services/clients.service';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
  closeResult = '';
  iconPenSquare = faPenSquare;
  iconFolder = faFolder;
  nameCtrl = new FormControl('',[Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]);
  addressCtrl = new FormControl('',[Validators.required, Validators.pattern(/^[A-Za-z0-9.',\s]*$/)]);
  cifCtrl = new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z]{1}\d{7}[a-zA-Z0-9]{1}$/)]);
  
  client: any = [];

  id: string;
  name: string;
  address: string;
  cif: string;
  image: string;

  form: FormGroup;

  token:string;
  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/clients';
  
  showAlert: boolean = false;
  success: boolean = false;
  alertMessage: string;
  errorAPI:boolean;


  constructor(
    private modalService: NgbModal,
    private clientsService: ClientsService,
    private loginService: LoginService,
    private fb: FormBuilder,
    ) {
       //Accedemos al servicio de login para recuperar el token que se ha guardado
      this.token = this.loginService.getBearerToken;

      //this.createForm();

     }

  ngOnInit(): void {
  }

  /*createForm() {
    this.form = this.fb.group({
      name: [this.name, [Validators.required]],
      address: [this.address, [Validators.required]],
      cif: [this.cif, [Validators.required]],
    });
  }

  get isNameInvalid() {
    return this.form.get('name').invalid && this.form.get('name').touched;
  }
  get isAddressInvalid() {
    return this.form.get('address').invalid && this.form.get('address').touched;
  }
  get isCIFInvalid() {
    return this.form.get('cif').invalid && this.form.get('cif').touched;
  }*/

  submit() {
    if (this.form.invalid) {
      // Si el form es inválido, márcamos los controles como "touched" para que se marquen/muestren los errores
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
        console.log("invalid");
      });
    }

    //this.createClient();
  }

  //pop-up informative window
  open(content) {
    this.modalService.open((content), {centered: true, ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  //pop-up upload image
  openUpload(contentUpload) {
    this.modalService.open((contentUpload), {centered: true, ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  //Enlarge image
  openEnlarge(contentEnlarge){
    this.modalService.open((contentEnlarge), {centered: true, ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  /*createClient(){
    console.log('Here 1');
    console.log(this.form.get('name').value);
    //let client = {
      //id: this.form.get('nameInput').value,
      name = this.form.get('name').value;
      adress: this.form.get('adress').value;
      dni: this.form.get('cif').value;
      //image: this.form.get('imageInput').value,      
    
    console.log(this.name + " " + this.cif);
    */
    /*this.clientsService.addClient(this.client.name, this.client.cif)
    .subscribe(
      ( client:any ) => {
      this.errorAPI = false;
      this.success=client.success;  
      console.log(client);
              
    }, ( errorServicio ) => {
      this.errorAPI = true;
      console.log(errorServicio);
    });  
  }*/

  

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
