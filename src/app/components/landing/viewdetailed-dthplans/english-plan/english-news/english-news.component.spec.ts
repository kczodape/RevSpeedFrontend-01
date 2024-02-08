import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishNewsComponent } from './english-news.component';

describe('EnglishNewsComponent', () => {
  let component: EnglishNewsComponent;
  let fixture: ComponentFixture<EnglishNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnglishNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnglishNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
