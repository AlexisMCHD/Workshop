import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceAuthentificationComponent } from './seance-authentification.component';

describe('SeanceAuthentificationComponent', () => {
  let component: SeanceAuthentificationComponent;
  let fixture: ComponentFixture<SeanceAuthentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeanceAuthentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
