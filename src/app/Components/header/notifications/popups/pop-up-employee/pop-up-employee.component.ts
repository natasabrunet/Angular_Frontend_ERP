import { Component, OnInit } from '@angular/core';
import { faEdit, faListAlt } from '@fortawesome/free-regular-svg-icons';
import { NotificationsService } from 'src/app/Services/notifications.service';
import { animate,trigger,transition,style, state } from '@angular/animations';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-pop-up-employee',
  templateUrl: './pop-up-employee.component.html',
  styleUrls: ['./pop-up-employee.component.scss'],
  animations:[
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(100%)' }),
        animate(200)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class PopUpEmployeeComponent implements OnInit {

  constructor(
    private notificationSvc:NotificationsService,
    public appComponent:AppComponent) {
      this.langs = appComponent.langs
   }

  ngOnInit(): void {
    this.getNotifications()
    
  }
  // edit not implemented yet
  faEdit = faEdit;
  //--------------
  langs:string[]=[]
  faListAlt =faListAlt
  ordersNotifications:any;
  numberNewOrderNotifications:number =0
  closePopUp:any

getNotifications(){
  this.notificationSvc.getAllNotifications().subscribe((data:any)=>{this.ordersNotifications = data.object})
  setInterval(()=>{this.checkNotifications()},10000)
}

 checkNotifications(){
   this.notificationSvc.getAllNotifications().subscribe((data:any)=>{
    var updateNotifications = data.object
    if(this.ordersNotifications.length !== updateNotifications.length){
    this.numberNewOrderNotifications =  updateNotifications.length - this.ordersNotifications.length
    this.ordersNotifications=updateNotifications
    this.closePopUp = setInterval(()=>{this.numberNewOrderNotifications=0,clearInterval(this.closePopUp)},6000)
    }
   })
 }
 mouseOnNotification(){
    clearInterval(this.closePopUp)
 }
 mouseLeaveNotification(){
    this.closePopUp = setInterval(()=>{this.numberNewOrderNotifications=0,clearInterval(this.closePopUp)},3000)
 }

 readNotifications(){
  this.numberNewOrderNotifications=0
 }
}
