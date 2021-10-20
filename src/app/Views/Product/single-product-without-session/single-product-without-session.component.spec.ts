import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductWithoutSessionComponent } from './single-product-without-session.component';

describe('SingleProductWithoutSessionComponent', () => {
  let component: SingleProductWithoutSessionComponent;
  let fixture: ComponentFixture<SingleProductWithoutSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProductWithoutSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProductWithoutSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
