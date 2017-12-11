import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(city: string) {
     
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=695fe8314fcc66d28899ba20e1920bef`)
     .map( response => response.json() )
      .toPromise();
     
   }
 
 }

   

  

