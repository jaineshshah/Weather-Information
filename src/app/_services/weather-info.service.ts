import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from 'src/app/enums/weather.enum';


@Injectable({
  providedIn: 'root'
})
export class WeatherInfoService {
  cityName = '';

  constructor(private http: HttpClient) { }

  getAllCityDetails() {
    return this.http.get(ApiUrl.url);
  }

  getCityWeatherByName(cityName: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=metric&appid=cd25236e313910a972e81c1a009093d3');
  }
}
