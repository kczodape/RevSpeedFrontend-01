import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilPlanComponent } from './tamil-plan.component';

describe('TamilPlanComponent', () => {
  let component: TamilPlanComponent;
  let fixture: ComponentFixture<TamilPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TamilPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TamilPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
