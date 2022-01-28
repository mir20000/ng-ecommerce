import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBannerContactComponent } from './top-banner-contact.component';

describe('TopBannerContactComponent', () => {
  let component: TopBannerContactComponent;
  let fixture: ComponentFixture<TopBannerContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBannerContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBannerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
