import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleSidebarComponent } from './role-sidebar.component';

describe('RoleSidebarComponent', () => {
  let component: RoleSidebarComponent;
  let fixture: ComponentFixture<RoleSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
