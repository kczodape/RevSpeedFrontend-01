import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandelTamilAuthenticationDialogeComponent } from './handel-tamil-authentication-dialoge.component';

describe('HandelTamilAuthenticationDialogeComponent', () => {
  let component: HandelTamilAuthenticationDialogeComponent;
  let fixture: ComponentFixture<HandelTamilAuthenticationDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandelTamilAuthenticationDialogeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandelTamilAuthenticationDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
