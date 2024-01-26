import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessplanComponent } from './businessplan.component';

describe('BusinessplanComponent', () => {
  let component: BusinessplanComponent;
  let fixture: ComponentFixture<BusinessplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessplanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
