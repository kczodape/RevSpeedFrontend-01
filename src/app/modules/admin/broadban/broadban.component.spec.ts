import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadbanComponent } from './broadban.component';

describe('BroadbanComponent', () => {
  let component: BroadbanComponent;
  let fixture: ComponentFixture<BroadbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BroadbanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BroadbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
