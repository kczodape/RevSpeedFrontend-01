import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetailedDthplansComponent } from './viewdetailed-dthplans.component';

describe('ViewdetailedDthplansComponent', () => {
  let component: ViewdetailedDthplansComponent;
  let fixture: ComponentFixture<ViewdetailedDthplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewdetailedDthplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewdetailedDthplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
