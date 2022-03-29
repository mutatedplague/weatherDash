import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state';
import { Day } from '../models/day.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private store: Store<AppState>, private http: HttpClient) {}

  getWeatherData(): Observable<Day[]> {
    return this.http.get('https://api.open-meteo.om/v1/forecast?latitude=39.07&longitude=-83.11&daily=weathercode,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&past_days=2').pipe(map((data) => {
      let days: Day[] = [];
      days = this.formatWeatherData(data);
      return days;
    }));
  }

  formatWeatherData(data: any) {
    let results = [];
    let range = data['daily'];
    let dates = range['time'];

    for (let i = 0; i < dates.length; i++) {
      let item = {
        code: range['weathercode'][i],
        date: range['time'][i],
        min: range['temperature_2m_min'][i],
        max: range['temperature_2m_max'][i]
      };

      results.push(item);
    }

    return results;
    
  }

}
