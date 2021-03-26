import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { I_userType } from 'src/app/Models/userType';
import { LoginService } from 'src/app/Services/login.service';

// In need for the translation
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-role-sidebar',
  templateUrl: './role-sidebar.component.html',
  styleUrls: ['./role-sidebar.component.scss'],
})
export class RoleSidebarComponent implements OnInit, OnChanges {
  brand = 'erp';
  userType: I_userType;
  @Output() stateSidebar = new EventEmitter<boolean>();
  @Input() _role: string;
  @Input() showSidebar: boolean;

  toggle = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this._toggleSidebar(); // default off
    this.loadRole(''); // sidebar fallback
  }

  ngOnChanges(): void {
    if (this.loginService.getToken) {
      setTimeout(() => this.loadRole(this._role), 2000); // <-- log in + mimic loading time
    }
  }

  _toggleSidebar() {
    this.toggle = !this.toggle;
    this.stateSidebar.emit(this.toggle);
  }

  // FIXME: TO DELETE (if fetched from DB)
  loadRole(authority: string) {
    // role-driven functionality
    switch (authority) {
      case 'ROLE_CLIENT':
        (() => {
          this.userType = {
            role: ['fas fa-user-tie', 'client'],
            operations: [
              // ['fas fa-eye', 'list', 'client-list'], // TODO: app-routing.module.ts
              ['fas fa-list-alt', 'orders', 'orders'], // TODO: app-routing.module.ts
              ['far fa-paper-plane', 'contact', 'contact-client'], // TODO: app-routing.module.ts
              ['far fa-address-card', 'profile', 'profile'], // TODO: app-routing.module.ts
              ['far fa-trash-alt', 'delete', 'delete-account'], // TODO: app-routing.module.ts
              ['fas fa-chart-line', 'stats', 'stats'], // TODO: app-routing.module.ts
            ],
          };
        })();
        break;
      case 'ROLE_ADMIN':
        (() => {
          this.userType = {
            role: ['fas fa-user-cog', 'admin'],
            operations: [
              ['fas fa-shopping-basket', 'products', 'product-list'],
              ['fas fa-users', 'clients', 'client-list'],
              ['fas fa-list-alt', 'orders', 'orders'], // TODO: app-routing.module.ts
              ['fas fa-id-card-alt', 'employees', 'employees-list'], // TODO: app-routing.module.ts
              ['fas fa-chart-line', 'stats', 'stats'], // TODO: app-routing.module.ts
            ],
          };
        })();
        break;
      case 'ROLE_EMPLOYEE':
        (() => {
          this.userType = {
            role: ['fas fa-user', 'employee'],
            operations: [
              ['fas fa-list-alt', 'orders', 'orders'], // TODO: app-routing.module.ts
              ['fas fa-clock', 'clock', 'clock'], // TODO: app-routing.module.ts
            ],
          };
        })();
        break;
      default:
        // fallback
        (() => {
          this.userType = {
            role: ['', ''],
            operations: [['', '', '']],
          };
        })();
    }
  }
}
