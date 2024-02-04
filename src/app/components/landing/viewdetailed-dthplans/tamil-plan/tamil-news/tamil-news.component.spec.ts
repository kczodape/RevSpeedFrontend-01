import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilNewsComponent } from './tamil-news.component';

describe('TamilNewsComponent', () => {
  let component: TamilNewsComponent;
  let fixture: ComponentFixture<TamilNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TamilNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TamilNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
