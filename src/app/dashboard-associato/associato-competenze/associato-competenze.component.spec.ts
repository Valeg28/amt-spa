import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatoCompetenzeComponent } from './associato-competenze.component';

describe('AssociatoCompetenzeComponent', () => {
  let component: AssociatoCompetenzeComponent;
  let fixture: ComponentFixture<AssociatoCompetenzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatoCompetenzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatoCompetenzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
