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
    if (true) {
      this.userType = {
        role: ['fas fa-user-cog', 'Admin'],
        operations: [
          ['fas fa-shopping-basket', 'products', 'dev/product-list'],
          ['fas fa-users', 'clients', 'dev/clients'],
          ['fas fa-list-alt', 'orders', 'dev/orders'],
          ['fas fa-id-card-alt', 'employees', 'dev/employees'],
          ['fas fa-chart-line', 'stats', 'dev/stats'],
        ],
      };
    }
    this.toggleSidebar();
  }

  toggleSidebar() {
    this.toggle = !this.toggle;
    this.stateSidebar.emit(this.toggle);
  }
}
