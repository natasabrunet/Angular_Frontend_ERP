import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../Services/employees.service';

import { Router } from '@angular/router';
import { I_Employee } from '../../Models/employee';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: I_Employee[];
  

  constructor(
    private EmployeesService: EmployeesService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.EmployeesService.getAllEmployees()
      .subscribe(
        (data:any)=>{
          this.employees = data.I_Employee;
          console.log(this.employees)

        },
        error=>{
          console.log(error);
        }
      );
  }



}
