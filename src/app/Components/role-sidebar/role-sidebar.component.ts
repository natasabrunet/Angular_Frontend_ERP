import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-sidebar',
  templateUrl: './role-sidebar.component.html',
  styleUrls: ['./role-sidebar.component.scss'],
})
export class RoleSidebarComponent implements OnInit {
  toggleState = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleState = !this.toggleState;
    console.log(this.toggleState);
  }
}
