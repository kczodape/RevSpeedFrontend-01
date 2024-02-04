import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReveneugraphComponent } from './reveneugraph.component';

describe('ReveneugraphComponent', () => {
  let component: ReveneugraphComponent;
  let fixture: ComponentFixture<ReveneugraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReveneugraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReveneugraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
