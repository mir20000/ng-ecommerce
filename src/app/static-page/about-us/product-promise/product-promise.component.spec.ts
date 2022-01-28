import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPromiseComponent } from './product-promise.component';

describe('ProductPromiseComponent', () => {
  let component: ProductPromiseComponent;
  let fixture: ComponentFixture<ProductPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPromiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
