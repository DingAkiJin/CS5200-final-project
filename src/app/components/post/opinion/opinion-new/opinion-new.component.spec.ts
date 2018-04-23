import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionNewComponent } from './opinion-new.component';

describe('OpinionNewComponent', () => {
  let component: OpinionNewComponent;
  let fixture: ComponentFixture<OpinionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpinionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
