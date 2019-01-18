import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatoComponent } from './associato.component';

describe('AssociatoComponent', () => {
  let component: AssociatoComponent;
  let fixture: ComponentFixture<AssociatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
