import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithoutSessionComponent } from './products-without-session.component';

describe('ProductsWithoutSessionComponent', () => {
  let component: ProductsWithoutSessionComponent;
  let fixture: ComponentFixture<ProductsWithoutSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsWithoutSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWithoutSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
