import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishPlanComponent } from './english-plan.component';

describe('EnglishPlanComponent', () => {
  let component: EnglishPlanComponent;
  let fixture: ComponentFixture<EnglishPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnglishPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnglishPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
