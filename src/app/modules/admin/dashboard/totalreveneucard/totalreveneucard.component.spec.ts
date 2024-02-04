import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalreveneucardComponent } from './totalreveneucard.component';

describe('TotalreveneucardComponent', () => {
  let component: TotalreveneucardComponent;
  let fixture: ComponentFixture<TotalreveneucardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalreveneucardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalreveneucardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
