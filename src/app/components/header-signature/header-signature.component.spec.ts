import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSignatureComponent } from './header-signature.component';

describe('HeaderSignatureComponent', () => {
  let component: HeaderSignatureComponent;
  let fixture: ComponentFixture<HeaderSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
