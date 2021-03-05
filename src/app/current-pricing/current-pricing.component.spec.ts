import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPricingComponent } from './current-pricing.component';

describe('CurrentPricingComponent', () => {
  let component: CurrentPricingComponent;
  let fixture: ComponentFixture<CurrentPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
