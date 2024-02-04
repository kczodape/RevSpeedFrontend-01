import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilnewsComponent } from './tamilnews.component';

describe('TamilnewsComponent', () => {
  let component: TamilnewsComponent;
  let fixture: ComponentFixture<TamilnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TamilnewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TamilnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
