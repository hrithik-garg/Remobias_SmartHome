import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherAPIURL = environment.WEATHER_API_ENDPOINT;
  private apiKey = environment.WEATHER_API_KEY;
  private units = 'metric';

  constructor(private http: HttpClient) { }

  getCurrentWeather(latitude: number, longitude: number) {
    const url = `${this.weatherAPIURL}weather?lat=${latitude}&lon=${longitude}&units=${this.units}&APPID=${this.apiKey}`;
    return this.http.get(url);
  }

  getWeatherList(latitude: number, longitude: number) {
    const url = `${this.weatherAPIURL}forecast?lat=${latitude}&lon=${longitude}&cnt=7&units=${this.units}&APPID=${this.apiKey}`;
    return this.http.get(url);
  }
}
