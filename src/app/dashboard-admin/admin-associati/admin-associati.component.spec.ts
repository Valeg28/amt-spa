import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssociatiComponent } from './admin-associati.component';

describe('AdminAssociatoComponent', () => {
  let component: AdminAssociatiComponent;
  let fixture: ComponentFixture<AdminAssociatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAssociatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssociatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
