import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloAssInfoComponent } from './profilo-ass-info.component';

describe('ProfiloAssInfoComponent', () => {
  let component: ProfiloAssInfoComponent;
  let fixture: ComponentFixture<ProfiloAssInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiloAssInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiloAssInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
