import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiPlanComponent } from './hindi-plan.component';

describe('HindiPlanComponent', () => {
  let component: HindiPlanComponent;
  let fixture: ComponentFixture<HindiPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HindiPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HindiPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
