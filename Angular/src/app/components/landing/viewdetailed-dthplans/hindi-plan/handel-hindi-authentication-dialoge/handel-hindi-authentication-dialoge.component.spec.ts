import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandelHindiAuthenticationDialogeComponent } from './handel-hindi-authentication-dialoge.component';

describe('HandelHindiAuthenticationDialogeComponent', () => {
  let component: HandelHindiAuthenticationDialogeComponent;
  let fixture: ComponentFixture<HandelHindiAuthenticationDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandelHindiAuthenticationDialogeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandelHindiAuthenticationDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
