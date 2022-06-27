import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsBeforeComponent } from './sessions-before.component';

describe('SessionsBeforeComponent', () => {
  let component: SessionsBeforeComponent;
  let fixture: ComponentFixture<SessionsBeforeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionsBeforeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
