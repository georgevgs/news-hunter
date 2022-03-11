import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-feed',
  templateUrl: './weather-feed.component.html',
  styleUrls: ['./weather-feed.component.css']
})
export class WeatherFeedComponent implements OnInit {
  weather: any;
  weatherLocationName = 'Glyfada';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherDataFetcher();
  }

  weatherDataFetcher(): void {
    this.weatherService.getTopHeadLines().subscribe(
      (result: any) => {
        console.log(result);
        this.weather = result.data.timelines[0].intervals[0].values;
        console.log(this.weather);
      },
      (err: string) => {
        console.log('ERROR=' + err);
      }
    );
  }

}
