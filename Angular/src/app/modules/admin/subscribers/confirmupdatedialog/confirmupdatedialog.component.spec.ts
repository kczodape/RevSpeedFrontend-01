import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmupdatedialogComponent } from './confirmupdatedialog.component';

describe('ConfirmupdatedialogComponent', () => {
  let component: ConfirmupdatedialogComponent;
  let fixture: ComponentFixture<ConfirmupdatedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmupdatedialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmupdatedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
