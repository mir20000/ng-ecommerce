import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductIndexComponent } from './all-product-index.component';

describe('AllProductIndexComponent', () => {
  let component: AllProductIndexComponent;
  let fixture: ComponentFixture<AllProductIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
