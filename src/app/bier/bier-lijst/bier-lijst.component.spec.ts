import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BierLijstComponent} from './bier-lijst.component';

describe('BierLijstComponent', () => {
  let component: BierLijstComponent;
  let fixture: ComponentFixture<BierLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BierLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BierLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
