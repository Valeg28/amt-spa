import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticoliComponent } from './admin-articoli.component';

describe('AdminArticoliComponent', () => {
  let component: AdminArticoliComponent;
  let fixture: ComponentFixture<AdminArticoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArticoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
