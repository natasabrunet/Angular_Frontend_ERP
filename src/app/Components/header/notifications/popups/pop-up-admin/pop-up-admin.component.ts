import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/Services/notifications.service';
import { animate,trigger,transition,style, state } from '@angular/animations';
import { faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-pop-up-admin',
  templateUrl: './pop-up-admin.component.html',
  styleUrls: ['./pop-up-admin.component.scss'],
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
export class PopUpAdminComponent implements OnInit {

  constructor(
    private notificationSvc:NotificationsService, 
    public appComponent:AppComponent) {
      this.langs = appComponent.langs
    
   }

  ngOnInit(): void {
    this.getNotifications()
    
  }
  langs:string[]=[]
  faUserPlus =faUserPlus
  faUserMinus = faUserMinus;
  AllCheckInOutNotifications:any
  numberNotificationsCheckIn:number=0
  numberNotificationsCheckOut:number=0
  totalNotifications:number=0
  closePopUp:any

getNotifications(){
  this.notificationSvc.getAllNotifications().subscribe((data:any)=>{this.AllCheckInOutNotifications = data.object})
  setInterval(()=>{this.checkNotifications()},10000)
}

 checkNotifications(){
   this.notificationSvc.getAllNotifications().subscribe((data:any)=>{
    var updateNotifications = data.object
    if(this.AllCheckInOutNotifications.length !== updateNotifications.length){
      this.numberNotificationsCheckIn =0
      this.numberNotificationsCheckOut =0
      for(let i=0;i<updateNotifications.length;i++){
        if(updateNotifications[i].type =="EMPLOYEE_ENTRY"){
          this.numberNotificationsCheckIn ++
        }
        else{
          this.numberNotificationsCheckOut ++
        }
      }
    this.totalNotifications =  this.numberNotificationsCheckIn + this.numberNotificationsCheckOut
    this.AllCheckInOutNotifications=updateNotifications
    this.closePopUp = setInterval(()=>{this.totalNotifications=0,clearInterval(this.closePopUp)},6000)
    }
   })
 }
 mouseOnNotification(){
    clearInterval(this.closePopUp)
 }
 mouseLeaveNotification(){
    this.closePopUp = setInterval(()=>{this.totalNotifications=0,clearInterval(this.closePopUp)},3000)
 }
 readNotifications(){
  this.totalNotifications=0
 }
}