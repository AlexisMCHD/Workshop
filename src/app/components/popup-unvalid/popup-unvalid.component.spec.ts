import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUnvalidComponent } from './popup-unvalid.component';

describe('PopupUnvalidComponent', () => {
  let component: PopupUnvalidComponent;
  let fixture: ComponentFixture<PopupUnvalidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupUnvalidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupUnvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
