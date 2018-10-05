import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BierPaginaComponent } from './bier-pagina.component';



describe('BierPaginaComponent', () => {
  let component: BierPaginaComponent;
  let fixture: ComponentFixture<BierPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BierPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BierPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
