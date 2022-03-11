import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFeedComponent } from './weather-feed.component';

describe('WeatherFeedComponent', () => {
  let component: WeatherFeedComponent;
  let fixture: ComponentFixture<WeatherFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
