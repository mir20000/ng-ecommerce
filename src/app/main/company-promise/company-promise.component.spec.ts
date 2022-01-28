import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPromiseComponent } from './company-promise.component';

describe('CompanyPromiseComponent', () => {
  let component: CompanyPromiseComponent;
  let fixture: ComponentFixture<CompanyPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyPromiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
