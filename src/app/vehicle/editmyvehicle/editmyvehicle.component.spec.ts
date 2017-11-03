import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmyvehicleComponent } from './editmyvehicle.component';

describe('EditmyvehicleComponent', () => {
  let component: EditmyvehicleComponent;
  let fixture: ComponentFixture<EditmyvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmyvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmyvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
