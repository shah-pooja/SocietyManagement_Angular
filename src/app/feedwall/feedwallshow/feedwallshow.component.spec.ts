import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedwallshowComponent } from './feedwallshow.component';

describe('FeedwallshowComponent', () => {
  let component: FeedwallshowComponent;
  let fixture: ComponentFixture<FeedwallshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedwallshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedwallshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
