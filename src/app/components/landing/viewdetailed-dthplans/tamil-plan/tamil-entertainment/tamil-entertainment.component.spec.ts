import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilEntertainmentComponent } from './tamil-entertainment.component';

describe('TamilEntertainmentComponent', () => {
  let component: TamilEntertainmentComponent;
  let fixture: ComponentFixture<TamilEntertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TamilEntertainmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TamilEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
