import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadbandplansComponent } from './broadbandplans.component';

describe('BroadbandplansComponent', () => {
  let component: BroadbandplansComponent;
  let fixture: ComponentFixture<BroadbandplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BroadbandplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BroadbandplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
