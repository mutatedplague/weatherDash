import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
    this.getWeatherData().subscribe(
      response => {
        
        //Format Weather Data
        console.log(response);
        this.formatWeatherData(response);

      },
      err => console.log(err)
    );
  }

  getWeatherData() {
    return this.http.get<any[]>('https://api.open-meteo.com/v1/forecast?latitude=39.07&longitude=-83.11&daily=weathercode,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&past_days=2');
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

    
  }

}
