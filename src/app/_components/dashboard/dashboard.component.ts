import { Component, OnInit } from '@angular/core';
import { WeatherInfoService } from 'src/app/_services/weather-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  weatherInfo: any;
  constructor(private weatherInfoService: WeatherInfoService) { }

  ngOnInit() {
    this.getAllCityDetails();
  }

  getAllCityDetails() {
    this.weatherInfoService.getAllCityDetails().subscribe(result => {
      if (result) {
        this.weatherInfo = result;
      }
    });
  }


}
