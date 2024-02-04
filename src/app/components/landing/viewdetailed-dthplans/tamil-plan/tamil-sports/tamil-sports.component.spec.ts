import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilSportsComponent } from './tamil-sports.component';

describe('TamilSportsComponent', () => {
  let component: TamilSportsComponent;
  let fixture: ComponentFixture<TamilSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TamilSportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TamilSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
