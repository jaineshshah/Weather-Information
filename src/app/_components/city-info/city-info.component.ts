import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherInfoService } from 'src/app/_services/weather-info.service';
import { CityInfo } from 'src/app/enums/weather.enum';
import * as moment from 'moment';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.scss']
})
export class CityInfoComponent implements OnInit {

  cityDetails: any;
  cityArray = [];

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private weatherInfoService: WeatherInfoService
  ) {
    this.route.params.subscribe(params => this.getCityByName(params.name));
  }

  ngOnInit(): void {
  }


  getCityByName(city: string) {
    this.weatherInfoService.getCityWeatherByName(city).subscribe(result => {
      if (result) {
        this.cityDetails = result;
        let currentDate: any = moment();
        for (let i = 0; this.cityArray.length <= 4; i++) {
          currentDate = moment().add(i, 'days');
          currentDate = currentDate.format(CityInfo.dateFormat) + CityInfo.dateTime;
          const data = this.cityDetails.list.find(x => x.dt_txt === currentDate);
          if (data !== undefined) {
            this.cityArray.push(data);
          }
        }
      }
    });
  }

  goToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }


}
