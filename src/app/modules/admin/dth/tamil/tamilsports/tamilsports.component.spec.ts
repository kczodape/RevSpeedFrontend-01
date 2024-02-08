import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilsportsComponent } from './tamilsports.component';

describe('TamilsportsComponent', () => {
  let component: TamilsportsComponent;
  let fixture: ComponentFixture<TamilsportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TamilsportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TamilsportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
