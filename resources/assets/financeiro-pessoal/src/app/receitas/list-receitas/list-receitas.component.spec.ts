import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReceitasComponent } from './list-receitas.component';

describe('ListReceitasComponent', () => {
  let component: ListReceitasComponent;
  let fixture: ComponentFixture<ListReceitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReceitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
