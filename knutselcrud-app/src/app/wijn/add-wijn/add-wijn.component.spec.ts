import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddWijnComponent} from './add-wijn.component';

describe('AddWijnComponent', () => {
  let component: AddWijnComponent;
  let fixture: ComponentFixture<AddWijnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWijnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWijnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
