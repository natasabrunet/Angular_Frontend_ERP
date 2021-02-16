import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-role-sidebar',
  templateUrl: './role-sidebar.component.html',
  styleUrls: ['./role-sidebar.component.scss'],
})
export class RoleSidebarComponent implements OnInit {
  toggle = false;
  @Output() stateSidebar = new EventEmitter<boolean>();
  admin = {
    role: ['fas fa-user-cog', 'Admin'],
    funcions: [
      ['fas fa-shopping-basket', 'products', 'dev/product-list'],
      ['fas fa-users', 'clients', 'dev/clients'],
      ['fas list-alt', 'orders', 'dev/orders'],
      ['far id-card', 'employees', 'dev/employees'],
      ['fas chart-line', 'stats', 'dev/stats'],
    ],
  };

  constructor() {}

  ngOnInit(): void {
    this.toggleSidebar();
  }

  toggleSidebar() {
    this.toggle = !this.toggle;
    this.stateSidebar.emit(this.toggle);
  }
}
