import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindinewsComponent } from './hindinews.component';

describe('HindinewsComponent', () => {
  let component: HindinewsComponent;
  let fixture: ComponentFixture<HindinewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HindinewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HindinewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
