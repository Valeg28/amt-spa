import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraInfoComponent } from './registra-info.component';

describe('RegistraInfoComponent', () => {
  let component: RegistraInfoComponent;
  let fixture: ComponentFixture<RegistraInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
