import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatoMessaggiComponent } from './associato-messaggi.component';

describe('AssociatoMessaggiComponent', () => {
  let component: AssociatoMessaggiComponent;
  let fixture: ComponentFixture<AssociatoMessaggiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatoMessaggiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatoMessaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
