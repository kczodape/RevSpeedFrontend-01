import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilPaymentDialogeComponent } from './tamil-payment-dialoge.component';

describe('TamilPaymentDialogeComponent', () => {
  let component: TamilPaymentDialogeComponent;
  let fixture: ComponentFixture<TamilPaymentDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TamilPaymentDialogeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TamilPaymentDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
