import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssociatoComponent } from './admin-associato.component';

describe('AdminAssociatoComponent', () => {
  let component: AdminAssociatoComponent;
  let fixture: ComponentFixture<AdminAssociatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAssociatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssociatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
