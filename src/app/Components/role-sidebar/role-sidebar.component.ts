import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { I_userType } from 'src/app/Models/userType';

@Component({
  selector: 'app-role-sidebar',
  templateUrl: './role-sidebar.component.html',
  styleUrls: ['./role-sidebar.component.scss'],
})
export class RoleSidebarComponent implements OnInit {
  brand = 'erp';
  userType: I_userType;
  @Output() stateSidebar = new EventEmitter<boolean>();
  toggle = false;

  constructor() {}

  ngOnInit(): void {
    // FIXME: TO DELETE (if saved in DB)

    // TODO: service switch-case:()=>{}
    let authority = 'ROLE_CLIENT';

    // reactive role functionality
    if (authority === 'ROLE_CLIENT') {
      this.userType = {
        role: ['fas fa-user-tie', 'client'],
        operations: [
          ['fas fa-eye', 'view', 'client-view'], // TODO: app-routing.module.ts
          ['fas fa-list-alt', 'orders', 'orders'], // TODO: app-routing.module.ts
          ['far fa-paper-plane', 'contact', 'contact-client'], // TODO: app-routing.module.ts
          ['far fa-trash-alt', 'delete', 'delete-account'], // TODO: app-routing.module.ts
          ['far fa-address-card', 'profile', 'profile'], // TODO: app-routing.module.ts
          ['fas fa-chart-line', 'stats', 'stats'], // TODO: app-routing.module.ts
        ],
      };
    }
    if (authority === 'ROLE_EMPLOYEE') {
      this.userType = {
        role: ['fas fa-user', 'employee'],
        operations: [
          ['fas fa-list-alt', 'orders', 'orders'], // TODO: app-routing.module.ts
          ['fas fa-clock', 'clock', 'clock'], // TODO: app-routing.module.ts
        ],
      };
    }
    if (authority === 'ROLE_ADMIN') {
      this.userType = {
        role: ['fas fa-user-cog', 'admin'],
        operations: [
          ['fas fa-shopping-basket', 'products', 'product-list'],
          ['fas fa-users', 'clients', 'new-client'],
          ['fas fa-list-alt', 'orders', 'orders'], // TODO: app-routing.module.ts
          ['fas fa-id-card-alt', 'employees', 'employees'], // TODO: app-routing.module.ts
          ['fas fa-chart-line', 'stats', 'stats'], // TODO: app-routing.module.ts
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
