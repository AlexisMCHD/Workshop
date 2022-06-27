import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsSignComponent } from './sessions-sign.component';

describe('SessionsSignComponent', () => {
  let component: SessionsSignComponent;
  let fixture: ComponentFixture<SessionsSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionsSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
