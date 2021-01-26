import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// TODO: cosider importing + ngOnInit()-registering ICON { faBars } in APP.COMPONENT.TS

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faBars = faBars; // TODO: cosider importing + ngOnInit()-registering ICON { faBars } in APP.COMPONENT.TS

  constructor() {}

  ngOnInit(): void {}
}
