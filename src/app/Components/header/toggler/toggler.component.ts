import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.scss']
})
export class TogglerComponent implements OnInit {
  faBars = faBars;
  toggle = false;

  @Output() showSidebar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  _toggleShowSidebar() {
    this.toggle = !this.toggle;
    this.showSidebar.emit(this.toggle);
  }

}
