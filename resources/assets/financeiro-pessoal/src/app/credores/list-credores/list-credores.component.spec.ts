import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCredoresComponent } from './list-credores.component';

describe('ListCredoresComponent', () => {
  let component: ListCredoresComponent;
  let fixture: ComponentFixture<ListCredoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCredoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCredoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
