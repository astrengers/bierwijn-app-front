import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WijnLijstComponent} from './wijn-lijst.component';

describe('WijnLijstComponent', () => {
  let component: WijnLijstComponent;
  let fixture: ComponentFixture<WijnLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WijnLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WijnLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
