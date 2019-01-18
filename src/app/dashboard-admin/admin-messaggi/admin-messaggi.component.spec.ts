import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMessaggiComponent } from './admin-messaggi.component';

describe('AdminMessaggiComponent', () => {
  let component: AdminMessaggiComponent;
  let fixture: ComponentFixture<AdminMessaggiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMessaggiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMessaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
