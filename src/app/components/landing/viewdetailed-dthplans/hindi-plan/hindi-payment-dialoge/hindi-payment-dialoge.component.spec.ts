import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiPaymentDialogeComponent } from './hindi-payment-dialoge.component';

describe('HindiPaymentDialogeComponent', () => {
  let component: HindiPaymentDialogeComponent;
  let fixture: ComponentFixture<HindiPaymentDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HindiPaymentDialogeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HindiPaymentDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
