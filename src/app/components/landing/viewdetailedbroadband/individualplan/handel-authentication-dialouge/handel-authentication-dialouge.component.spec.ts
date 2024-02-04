import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandelAuthenticationDialougeComponent } from './handel-authentication-dialouge.component';

describe('HandelAuthenticationDialougeComponent', () => {
  let component: HandelAuthenticationDialougeComponent;
  let fixture: ComponentFixture<HandelAuthenticationDialougeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandelAuthenticationDialougeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandelAuthenticationDialougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
