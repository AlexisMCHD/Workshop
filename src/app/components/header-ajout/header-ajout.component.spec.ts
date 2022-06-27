import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAjoutComponent } from './header-ajout.component';

describe('HeaderAjoutComponent', () => {
  let component: HeaderAjoutComponent;
  let fixture: ComponentFixture<HeaderAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
