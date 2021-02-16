import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-role-sidebar',
  templateUrl: './role-sidebar.component.html',
  styleUrls: ['./role-sidebar.component.scss'],
})
export class RoleSidebarComponent implements OnInit {
  toggle = false;
  @Output() stateSidebar = new EventEmitter<boolean>();
  admin = {};

  constructor() {}

  ngOnInit(): void {
    this.toggleSidebar();
  }

  toggleSidebar() {
    this.toggle = !this.toggle;
    this.stateSidebar.emit(this.toggle);
  }
}
