import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishPaymentDialogeComponent } from './english-payment-dialoge.component';

describe('EnglishPaymentDialogeComponent', () => {
  let component: EnglishPaymentDialogeComponent;
  let fixture: ComponentFixture<EnglishPaymentDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnglishPaymentDialogeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnglishPaymentDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
