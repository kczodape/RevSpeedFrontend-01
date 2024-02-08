import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadbandpiechartComponent } from './broadbandpiechart.component';

describe('BroadbandpiechartComponent', () => {
  let component: BroadbandpiechartComponent;
  let fixture: ComponentFixture<BroadbandpiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BroadbandpiechartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BroadbandpiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
