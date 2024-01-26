import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualcardsComponent } from './individualcards.component';

describe('IndividualcardsComponent', () => {
  let component: IndividualcardsComponent;
  let fixture: ComponentFixture<IndividualcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualcardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
