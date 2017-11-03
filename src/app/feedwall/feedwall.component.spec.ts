import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedwallComponent } from './feedwall.component';

describe('FeedwallComponent', () => {
  let component: FeedwallComponent;
  let fixture: ComponentFixture<FeedwallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedwallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
