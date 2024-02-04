import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishSportsComponent } from './english-sports.component';

describe('EnglishSportsComponent', () => {
  let component: EnglishSportsComponent;
  let fixture: ComponentFixture<EnglishSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnglishSportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnglishSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
