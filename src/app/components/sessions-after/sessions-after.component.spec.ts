import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsAfterComponent } from './sessions-after.component';

describe('SessionsAfterComponent', () => {
  let component: SessionsAfterComponent;
  let fixture: ComponentFixture<SessionsAfterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionsAfterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
