import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsubscribercardComponent } from './totalsubscribercard.component';

describe('TotalsubscribercardComponent', () => {
  let component: TotalsubscribercardComponent;
  let fixture: ComponentFixture<TotalsubscribercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalsubscribercardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalsubscribercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
