import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageLoggedinComponent } from './main-page-loggedin.component';

describe('MainPageLoggedinComponent', () => {
  let component: MainPageLoggedinComponent;
  let fixture: ComponentFixture<MainPageLoggedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageLoggedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageLoggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
