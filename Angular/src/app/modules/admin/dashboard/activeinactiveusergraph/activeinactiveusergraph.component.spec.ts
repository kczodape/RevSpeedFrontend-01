import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveinactiveusergraphComponent } from './activeinactiveusergraph.component';

describe('ActiveinactiveusergraphComponent', () => {
  let component: ActiveinactiveusergraphComponent;
  let fixture: ComponentFixture<ActiveinactiveusergraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveinactiveusergraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveinactiveusergraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
