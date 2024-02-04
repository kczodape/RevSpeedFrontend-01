import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishEntertainmentComponent } from './english-entertainment.component';

describe('EnglishEntertainmentComponent', () => {
  let component: EnglishEntertainmentComponent;
  let fixture: ComponentFixture<EnglishEntertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnglishEntertainmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnglishEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
