import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductSidebarsComponent } from './show-product-sidebars.component';

describe('ShowProductSidebarsComponent', () => {
  let component: ShowProductSidebarsComponent;
  let fixture: ComponentFixture<ShowProductSidebarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductSidebarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductSidebarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
