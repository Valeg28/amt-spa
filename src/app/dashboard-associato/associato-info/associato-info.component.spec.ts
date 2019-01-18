import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatoInfoComponent } from './associato-info.component';

describe('AssociatoInfoComponent', () => {
  let component: AssociatoInfoComponent;
  let fixture: ComponentFixture<AssociatoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
