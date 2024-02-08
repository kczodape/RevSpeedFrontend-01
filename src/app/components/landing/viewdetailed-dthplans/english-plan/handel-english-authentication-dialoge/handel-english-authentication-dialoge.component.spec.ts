import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandelEnglishAuthenticationDialogeComponent } from './handel-english-authentication-dialoge.component';

describe('HandelEnglishAuthenticationDialogeComponent', () => {
  let component: HandelEnglishAuthenticationDialogeComponent;
  let fixture: ComponentFixture<HandelEnglishAuthenticationDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandelEnglishAuthenticationDialogeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandelEnglishAuthenticationDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
