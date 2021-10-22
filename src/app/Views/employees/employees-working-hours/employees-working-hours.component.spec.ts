import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesWorkingHoursComponent } from './employees-working-hours.component';

describe('EmployeesWorkingHoursComponent', () => {
  let component: EmployeesWorkingHoursComponent;
  let fixture: ComponentFixture<EmployeesWorkingHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesWorkingHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesWorkingHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
