import { Component, OnInit } from '@angular/core';
import { faCopyright  } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentDate:Date = new Date();
  
  iconCopyright = faCopyright;
 
  constructor() { 
    //This code is for updating the hour of footer without refresh the page
    setInterval(() => {         
      this.currentDate = new Date();
    }, 1000);
  }
  

  ngOnInit(): void {
  }

}
