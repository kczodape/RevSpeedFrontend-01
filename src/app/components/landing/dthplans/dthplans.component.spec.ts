import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DthplansComponent } from './dthplans.component';

describe('DthplansComponent', () => {
  let component: DthplansComponent;
  let fixture: ComponentFixture<DthplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DthplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DthplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
