import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiSportComponent } from './hindi-sport.component';

describe('HindiSportComponent', () => {
  let component: HindiSportComponent;
  let fixture: ComponentFixture<HindiSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HindiSportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HindiSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
