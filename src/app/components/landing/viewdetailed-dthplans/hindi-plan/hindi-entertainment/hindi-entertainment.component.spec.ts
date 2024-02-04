import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiEntertainmentComponent } from './hindi-entertainment.component';

describe('HindiEntertainmentComponent', () => {
  let component: HindiEntertainmentComponent;
  let fixture: ComponentFixture<HindiEntertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HindiEntertainmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HindiEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
