import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloAssFeedComponent } from './profilo-ass-feed.component';

describe('ProfiloAssFeedComponent', () => {
  let component: ProfiloAssFeedComponent;
  let fixture: ComponentFixture<ProfiloAssFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiloAssFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiloAssFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
