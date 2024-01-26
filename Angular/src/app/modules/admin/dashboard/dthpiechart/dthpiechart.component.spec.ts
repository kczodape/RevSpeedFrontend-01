import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DthpiechartComponent } from './dthpiechart.component';

describe('DthpiechartComponent', () => {
  let component: DthpiechartComponent;
  let fixture: ComponentFixture<DthpiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DthpiechartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DthpiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
