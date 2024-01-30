import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPaymentDialogComponent } from './business-payment-dialog.component';

describe('BusinessPaymentDialogComponent', () => {
  let component: BusinessPaymentDialogComponent;
  let fixture: ComponentFixture<BusinessPaymentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessPaymentDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessPaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
