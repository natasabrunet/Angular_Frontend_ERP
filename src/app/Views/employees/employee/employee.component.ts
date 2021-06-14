import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { I_Employee } from '../../../Models/employee';
import { EmployeesService } from '../../../Services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employee       : I_Employee;

  id             :string;
  name           :string;
  email          :string;
  salary         :string;
  dni            :string;
  totalSellings  :string;
  phone          :string;
  ordersAttended :string;
  ordersAssigned :string;

  isNew          : boolean = false;
  doValidations  : boolean = false;

  showAlert      : boolean = false;
  success        : boolean = false;
  alertMessage  : string;


  form: FormGroup;

  constructor(private employeesService: EmployeesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
    this.resetEmployee();
    this.createForm();
  }

  ngOnInit(): void {
    //Recuperamos el parámetro (id) del cliente y cargamos su info
    this.activatedRoute.params.subscribe( params => {
      const id = params['id'];
      if (id.toLowerCase() == 'new') {
        this.isNew = true;
        this.resetEmployee();
      } else {
        this.loadEmployee(id);
      }
      // Init True/False for:
      //   - true: valildations will be triggered when field is "touched"
      //   - false: valildations will be triggered when submit the form
      this.doValidations = true;
    });

  }

  createForm() {
    this.form = this.fb.group({
      // name: [this.name, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      // address: [this.address, [Validators.required, Validators.maxLength(50)]],
      // cif: [this.cif, [Validators.required, Validators.maxLength(10)]]
      name: [this.employee.name, [Validators.required]],
      email: [this.employee.email, [Validators.required, Validators.email]],
      salary: [this.employee.salary, [Validators.required]],
      dni: [this.employee.dni, [Validators.required]],
      phone: [this.employee.phone, [Validators.required]],

      totalSellings: [{value: this.employee.totalSellings, disabled: true}, [Validators.required]],
      ordersAttended: [{value: this.employee.ordersAttended, disabled: true}, [Validators.required]],
      ordersAssigned: [{value: this.employee.ordersAssigned, disabled: true}, [Validators.required]]
    });
  }

  get isNameEmpty() {
    // return this.form.get('name').invalid && this.form.get('name').touched;
    return this.doValidations && this.form.get('name').invalid && this.form.get('name').touched;
  }
  get isEmailEmpty() {
    // return this.form.get('email').value.trim() === '' && this.form.get('email').invalid && this.form.get('email').touched;
    return this.doValidations && this.form.get('email').invalid && this.form.get('email').value.trim() === '' && this.form.get('email').touched;
  }
  get isEmailInvalid() {
    // return this.form.get('email').value.trim() !== '' && this.form.get('email').invalid && this.form.get('email').touched;
    return this.doValidations && this.form.get('email').invalid && this.form.get('email').value.trim() !== '' && this.form.get('email').touched;
  }
  get isSalaryEmpty() {
    // return this.form.get('salary').invalid && this.form.get('salary').touched;
    return this.doValidations && this.form.get('salary').invalid && this.form.get('salary').touched;
  }
  get isDniEmpty() {
    // return this.form.get('dni').invalid && this.form.get('dni').touched;
    return this.doValidations && this.form.get('dni').invalid && this.form.get('dni').touched;
  }
  get isPhoneEmpty() {
    // return this.form.get('phone').invalid && this.form.get('phone').touched;
    return this.doValidations && this.form.get('phone').invalid && this.form.get('phone').touched;
  }

  submit() {
    this.doValidations = true;
    if (this.form.invalid) {
      // Si el form es inválido, márcamos los controles como "touched" para que se marquen/muestren los errores
      return Object.values(this.form.controls).forEach( control => {
        control.markAsTouched();
      });
    }

    this.updateEmployee();
    this.doValidations = false;
  }

  resetEmployee() {
    this.employee = {
        id             : '',
        name           : '',
        email          : '',
        salary         : '',
        dni            : '',
        totalSellings  : '',
        phone          : '',
        ordersAttended : '',
        ordersAssigned : ''
    }
  }

  loadEmployee(id: string) {
    this.employeesService.getEmployeeByID(id)
      .subscribe( (data:any) => {
        console.log("data");
        console.log(data);
        console.log("data.user");
        console.log(data.employee);

        if (!data || !data.employee) {
          this.router.navigateByUrl('employees-list'); // redirect to client-list
        } else {
            this.employee.id = data.employee.id; //Guardamos el ID para poder usarlo en todo el componente (necesario para update y delete)
            this.employee.name = data.employee.user.username;
            this.employee.email = data.employee.email;
            this.employee.salary = data.employee.salary;
            this.employee.dni = data.employee.dni;
            this.employee.totalSellings = data.employee.salary;
            this.employee.phone = data.employee.phone;
            this.employee.ordersAssigned = data.employee.salary;
            this.employee.ordersAttended = data.employee.salary;

            this.employeeToForm();
        }
      }, (err) => {
        console.log(err);
        // this.showAlert = true;
        // this.success = false;
        // this.returnMessage = err.error;
      }) //Llamamos al servicio que accede a la API para recuperar la info del Employee y lo cargamos en el Form
  }

  employeeToForm() {
    this.form.get("name").setValue(this.employee.name);
    this.form.get("email").setValue(this.employee.email);
    this.form.get("salary").setValue(this.employee.salary);
    this.form.get("dni").setValue(this.employee.dni);
    this.form.get("phone").setValue(this.employee.phone);
    this.form.get("totalSellings").setValue(this.employee.totalSellings);
    this.form.get("ordersAttended").setValue(this.employee.ordersAttended);
    this.form.get("ordersAssigned").setValue(this.employee.ordersAssigned);
  }

  formToEmployee() {
    this.employee.name           = this.form.get("name").value;
    this.employee.email          = this.form.get("email").value;
    this.employee.salary         = this.form.get("salary").value;
    this.employee.dni            = this.form.get("dni").value;
    this.employee.phone          = this.form.get("phone").value;
    this.employee.totalSellings  = this.form.get("totalSellings").value;
    this.employee.ordersAttended = this.form.get("ordersAttended").value;
    this.employee.ordersAssigned = this.form.get("ordersAssigned").value;
  }

  updateEmployee() {
    // const employee = {
    //   id             : this.id,
    //   nameAndSurname : this.form.get("name").value,
    //   address        : this.form.get("address").value,
    //   dni            : this.form.get("cif").value,
    //   image          : this.image
    // };
    this.formToEmployee();

    this.employeesService.updateEmployee(this.employee)
    .subscribe(resp => {
      this.showAlert = true;
      this.success = true;


      // let alert show up and then redirect
      setTimeout(() => {
        this.showAlert = false; // alert OK
        this.alertMessage = ''
      }, 2000);
    }, (err) => {
      // console.log(err);
      this.showAlert = true;
      this.success = false;
      this.alertMessage = err.error.message;
    });
  }


  deleteEmployee() {
    this.employeesService.deleteEmployee(this.employee.id)
    .subscribe(resp => {
      this.showAlert = true;
      this.success = true;
      this.alertMessage = 'Employee deleted!!!'

      // let alert show up and then redirect
      setTimeout(() => {
        this.showAlert = false; // alert OK
        this.alertMessage = '';
        this.router.navigateByUrl('employees-list'); // redirect to employees-list
      }, 2000);
    }, (err) => {
      console.log(err);
      this.showAlert = true;
      this.success = false;
      this.alertMessage = err.error;
    });
  }

}
