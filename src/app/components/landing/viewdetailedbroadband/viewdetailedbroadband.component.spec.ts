import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetailedbroadbandComponent } from './viewdetailedbroadband.component';

describe('ViewdetailedbroadbandComponent', () => {
  let component: ViewdetailedbroadbandComponent;
  let fixture: ComponentFixture<ViewdetailedbroadbandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewdetailedbroadbandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewdetailedbroadbandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
