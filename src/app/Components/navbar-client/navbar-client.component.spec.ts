import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarClientComponent } from './navbar-client.component';

describe('NavbarClientComponent', () => {
  let component: NavbarClientComponent;
  let fixture: ComponentFixture<NavbarClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
