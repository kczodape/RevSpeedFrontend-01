import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilentertainmentComponent } from './tamilentertainment.component';

describe('TamilentertainmentComponent', () => {
  let component: TamilentertainmentComponent;
  let fixture: ComponentFixture<TamilentertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TamilentertainmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TamilentertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
