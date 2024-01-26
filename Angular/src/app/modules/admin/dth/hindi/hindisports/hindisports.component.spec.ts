import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindisportsComponent } from './hindisports.component';

describe('HindisportsComponent', () => {
  let component: HindisportsComponent;
  let fixture: ComponentFixture<HindisportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HindisportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HindisportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
