import { TestBed } from '@angular/core/testing';

import { WeatherInfoService } from './weather-info.service';

describe('WeatherServiceService', () => {
  let service: WeatherInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
