import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatoFeedbackComponent } from './associato-feedback.component';

describe('AssociatoFeedbackComponent', () => {
  let component: AssociatoFeedbackComponent;
  let fixture: ComponentFixture<AssociatoFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatoFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatoFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
