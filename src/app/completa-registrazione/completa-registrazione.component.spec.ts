import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletaRegistrazioneComponent } from './completa-registrazione.component';

describe('CompletaRegistrazioneComponent', () => {
  let component: CompletaRegistrazioneComponent;
  let fixture: ComponentFixture<CompletaRegistrazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletaRegistrazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletaRegistrazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
