import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandelBusinessAuthenticationDialogeComponent } from './handel-business-authentication-dialoge.component';

describe('HandelBusinessAuthenticationDialogeComponent', () => {
  let component: HandelBusinessAuthenticationDialogeComponent;
  let fixture: ComponentFixture<HandelBusinessAuthenticationDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandelBusinessAuthenticationDialogeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandelBusinessAuthenticationDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
