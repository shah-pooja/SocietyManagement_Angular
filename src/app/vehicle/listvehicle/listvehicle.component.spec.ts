import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvehicleComponent } from './listvehicle.component';

describe('ListvehicleComponent', () => {
  let component: ListvehicleComponent;
  let fixture: ComponentFixture<ListvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
