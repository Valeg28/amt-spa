import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloAssCompetenzaComponent } from './profilo-ass-competenza.component';

describe('ProfiloAssCompetenzaComponent', () => {
  let component: ProfiloAssCompetenzaComponent;
  let fixture: ComponentFixture<ProfiloAssCompetenzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiloAssCompetenzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiloAssCompetenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
