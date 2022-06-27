import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsActiveComponent } from './sessions-active.component';

describe('SessionsActiveComponent', () => {
  let component: SessionsActiveComponent;
  let fixture: ComponentFixture<SessionsActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionsActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
