import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualplanComponent } from './individualplan.component';

describe('IndividualplanComponent', () => {
  let component: IndividualplanComponent;
  let fixture: ComponentFixture<IndividualplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualplanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
