import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDialougeComponent } from './payment-dialouge.component';

describe('PaymentDialougeComponent', () => {
  let component: PaymentDialougeComponent;
  let fixture: ComponentFixture<PaymentDialougeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentDialougeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentDialougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
