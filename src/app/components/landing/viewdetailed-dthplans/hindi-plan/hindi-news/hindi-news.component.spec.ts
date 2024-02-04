import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiNewsComponent } from './hindi-news.component';

describe('HindiNewsComponent', () => {
  let component: HindiNewsComponent;
  let fixture: ComponentFixture<HindiNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HindiNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HindiNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
