import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindientertainmentComponent } from './hindientertainment.component';

describe('HindientertainmentComponent', () => {
  let component: HindientertainmentComponent;
  let fixture: ComponentFixture<HindientertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HindientertainmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HindientertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
