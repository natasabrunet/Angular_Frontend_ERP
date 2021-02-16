import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { I_userType } from 'src/app/Models/userType';

@Component({
  selector: 'app-role-sidebar',
  templateUrl: './role-sidebar.component.html',
  styleUrls: ['./role-sidebar.component.scss'],
})
export class RoleSidebarComponent implements OnInit {
  userType: I_userType;
  toggle = false;
  @Output() stateSidebar = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
    // FIXME: service switch-case ROLE

    // reactive role functionality
    if (true) {
      this.userType = {
        role: ['fas fa-user-cog', 'Admin'],
        operations: [
          ['fas fa-shopping-basket', 'products', 'product-list'],
          ['fas fa-users', 'clients', 'clients'],
          ['fas fa-list-alt', 'orders', 'orders'],
          ['fas fa-id-card-alt', 'employees', 'employees'],
          ['fas fa-chart-line', 'stats', 'stats'],
        ],
      };
    }

    // default toggle off
    this._toggleSidebar();
  }

  _toggleSidebar() {
    this.toggle = !this.toggle;
    this.stateSidebar.emit(this.toggle);
  }
}
