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
/* bestEmployeeInfo: */
public username:  string;
public dni:string;
public phone:number;
public total_sales:number;
/* bestEmployeeInfo: */
public usernameWorstEmployee:  string;
public dniWorstEmployee:string;
public phoneWorstEmployee:number;
public total_sales_WorstEmployee:number;


  constructor( private stasService : StatsService ) { 
    
  }

  ngOnInit(): void {
    this.dataOrders()
   this.bestEmployee()
    this.worstEmployee() 
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
        this.username=resp.employee.employee.user.username;
        this.dni=resp.employee.employee.dni;
        this.phone=resp.employee.employee.phone;
        this.total_sales=resp.employee.total_sales; 
      },
      error => {
      console.log( error);
      });
  }
  worstEmployee(){
    this.stasService.getWorstEmployee()
    .subscribe(
      (data:any) => {
        this.usernameWorstEmployee=data.employee.employee.user.username;
        this.dniWorstEmployee=data.employee.employee.dni;
        this.phoneWorstEmployee=data.employee.employee.phone;
        this.total_sales_WorstEmployee=data.employee.total_sales;
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