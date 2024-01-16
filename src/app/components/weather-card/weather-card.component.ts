import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { default_imgs } from 'src/app/constants/constants';
import * as moment from 'moment';
import { HeadingComponent } from '../heading/heading.component';
import { ImageComponent } from '../image/image.component';
import { WeatherService } from 'src/app/services/weather.service';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

interface WeatherData {
  time: string;
  temperature: string;
  icon: string;
}

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  standalone: true,
  imports: [CommonModule, HeadingComponent, ImageComponent],
})
export class WeatherCardComponent implements OnInit {
  latitude: number = 49.240170;
  longitude: number = 9.102015;
  city: string = '';
  temperature!: string;
  description: string = '';
  currentWeather: string = '';
  weatherImage!: string;
  weatherData: WeatherData[] = [];
  currentLanguage!: string;
  constructor(private weatherService: WeatherService,
    private messageService: MessageService,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.getCurrentWeather();
    this.getWeatherList();
    this.getLocation();
    this.currentLanguage = this.translateService.currentLang;
  }

  getLocation(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.getCurrentWeather();
          this.getWeatherList();
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error getting geolocation: ,' + error,
          });
        }
      );
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Geolocation is not available.',
      });
    }
  }

  getCurrentWeather(): void {
    this.weatherService.getCurrentWeather(this.latitude, this.longitude).subscribe((data: any) => {
      this.city = data.name;
      this.temperature = data.main.temp.toFixed(0);
      this.currentWeather = data.weather[0].main;
      this.getWeatherIcon(this.currentWeather);
    });
  }

  getWeatherList(): void {
    this.weatherService.getWeatherList(this.latitude, this.longitude).subscribe((data: any) => {
      let weatherData = data.list;
      weatherData = weatherData.slice(1);
      this.weatherData = weatherData.map((weather: any) => ({
        time: (moment(weather.dt_txt).format(this.currentLanguage == 'en'? 'hA': 'HH.mm')),
        temperature: weather.main.temp.toFixed(0),
        icon: this.getWeatherIcon(weather.weather[0].main)
      }));
    });
  }

  getWeatherIcon(weather: string): string {
    switch (weather) {
      case 'Clear':
        return default_imgs.sun_img;
      case 'Clouds':
        return default_imgs.cloud_img;
      case 'Rain':
        return default_imgs.rain_img;
        case 'Thunderstorm':
          return default_imgs.thunderstorm_img;
          case 'Drizzle':
        return default_imgs.cloud_sun_img;
      default:
        return default_imgs.sun_img;
    }
  }
}
