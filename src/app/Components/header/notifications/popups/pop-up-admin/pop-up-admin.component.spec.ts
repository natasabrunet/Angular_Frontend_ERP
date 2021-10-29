import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAdminComponent } from './pop-up-admin.component';

describe('PopUpAdminComponent', () => {
  let component: PopUpAdminComponent;
  let fixture: ComponentFixture<PopUpAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
