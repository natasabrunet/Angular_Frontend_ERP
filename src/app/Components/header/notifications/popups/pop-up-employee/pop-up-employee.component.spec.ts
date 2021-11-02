import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEmployeeComponent } from './pop-up-employee.component';

describe('PopUpEmployeeComponent', () => {
  let component: PopUpEmployeeComponent;
  let fixture: ComponentFixture<PopUpEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
