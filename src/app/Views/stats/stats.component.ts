import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { StatsService } from '../../Services/stats.service';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  // Pie
  public pieChartOptions: ChartOptions = {    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

/* Best Employee Info: */
public name: string;
public idemployee: number;
public surname: string;
public username:  string;
public dni:string;
public phone:number;
public total_sales:number;
public salary:number;
public orders: number;

/* Worst Employee Info: */
public nameWorstEmployee: string;
public ideWorstEmployee: number;
public surnameWorstEmployee: string;
public usernameWorstEmployee:  string;
public dniWorstEmployee:string;
public phoneWorstEmployee:number;
public total_sales_WorstEmployee:number;
public salaryWorstEmployee:number;
public ordersWorstEmployee: number;

/*Salaries year and month Info:*/
public salariesyear: number;
public salariesmonth: number;

/*Profit month Info:*/
public profits: any = [];

/* Top 10 sales*/
public toptenDni: string;
public toptenQty: number;
public positiontopten: number = 0;


  constructor( private stasService : StatsService ) {

  }

  ngOnInit(): void {
    this.dataOrders()
    this.bestEmployee()
    this.worstEmployee()
    this.salaryyear()
    this.salarymonth()
    this.profitmonth()
    this.salestopten()
  }


  dataOrders(){
    this.stasService.getAllOrders()
      .subscribe(
        (data: any) => {
          data.employee.forEach(employee => {
            this.pieChartLabels.push(employee.name);
            this.pieChartData.push(employee.orders);
          });
        },
        error => {
        console.log( error);
        });
  }
  bestEmployee(){
    this.stasService.getBestEmployee()
    .subscribe(
      (resp:any) => {
        this.name = resp.employee.employee.name;
        this.idemployee = resp.employee.employee.user.id;
        this.surname = resp.employee.employee.surname;
        this.username=resp.employee.employee.user.username;
        this.dni=resp.employee.employee.dni;
        this.phone=resp.employee.employee.phone;
        this.total_sales=resp.employee.total_sales;
        this.salary=resp.employee.employee.salary;
        this.orders = resp.employee.employee.total_orders_attended;
      },
      error => {
      console.log( error);
      });
  }
  worstEmployee(){
    this.stasService.getWorstEmployee()
    .subscribe(
      (data:any) => {
        this.nameWorstEmployee=data.employee.employee.name;
        this.ideWorstEmployee = data.employee.employee.user.id;
        this.surnameWorstEmployee = data.employee.employee.surname;
        this.usernameWorstEmployee=data.employee.employee.user.username;
        this.dniWorstEmployee=data.employee.employee.dni;
        this.phoneWorstEmployee=data.employee.employee.phone;
        this.total_sales_WorstEmployee=data.employee.total_sales;
        this.salaryWorstEmployee=data.employee.employee.salary;
        this.ordersWorstEmployee = data.employee.employee.total_orders_attended;
      },
      error => {
      console.log( error);
      });
  }


  salaryyear(){
    this.stasService.getsalariesyear()
    .subscribe(
      (resp:any)=>{
        this.salariesyear=resp.salaries;

      },
      error => {
        console.log( error);
        });
  }

  salarymonth(){
    this.stasService.getsalariesmonth()
    .subscribe(
      (resp:any)=>{
        this.salariesmonth=resp.salaries;
      },
      error => {
        console.log( error);
        });
  }



  profitmonth(){
    let i: number;
    for (i=1; i<=12; i++){
      this.stasService.getprofitmonth(2021, i)
    .subscribe(
      (resp:any)=>{
        if (resp.profit) {
          this.profits.push(resp.profit);
        }else{
          this.profits.push(0);
        }
      },
      error => {
        console.log( error);
        });
    }
  }

  salestopten(){

    this.stasService.getToptensales("date1", "date2")
    .subscribe(
      (resp:any)=>{
        this.toptenDni = resp.employees.dni;
        this.toptenQty = resp.employees.total;
      },
      error => {
        console.log( error);
        });

  }



  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  changeLegendPosition(): void {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }
}
