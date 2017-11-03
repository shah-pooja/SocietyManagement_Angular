import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmyvehicleComponent } from './listmyvehicle.component';

describe('ListmyvehicleComponent', () => {
  let component: ListmyvehicleComponent;
  let fixture: ComponentFixture<ListmyvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmyvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmyvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
