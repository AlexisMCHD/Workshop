import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupValidComponent } from './popup-valid.component';

describe('PopupValidComponent', () => {
  let component: PopupValidComponent;
  let fixture: ComponentFixture<PopupValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
