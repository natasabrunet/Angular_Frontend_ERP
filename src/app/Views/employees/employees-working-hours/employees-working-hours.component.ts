import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/Services/employees.service';
import { ActivatedRoute } from '@angular/router';
import { WorkingHoursService } from 'src/app/Services/working-hours.service';

@Component({
  selector: 'app-employees-working-hours',
  templateUrl: './employees-working-hours.component.html',
  styleUrls: ['./employees-working-hours.component.scss']
})
export class EmployeesWorkingHoursComponent implements OnInit {
  
  constructor(
    private employeService:EmployeesService,  
    private actRoute:ActivatedRoute,
    private workingHoursSvc: WorkingHoursService) { }
    
employee:any
workingHours:any;

getEmployeeInfo(){
  const id = this.actRoute.snapshot.paramMap.get('id');
  this.employeService.getEmployeeByID(id).subscribe((data:any)=>{this.employee= data.employee})
  this.workingHoursSvc.getWorkingHoursByID(id).subscribe((data:any)=>{this.workingHours=data.working_hours})
  
}
 ngOnInit(): void {
    this.getEmployeeInfo()
  }

}
