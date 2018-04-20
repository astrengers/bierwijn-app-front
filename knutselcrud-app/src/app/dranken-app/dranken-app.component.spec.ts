import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BierAppComponent} from './dranken-app.component';

describe('BierAppComponent', () => {
  let component: BierAppComponent;
  let fixture: ComponentFixture<BierAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BierAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BierAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
