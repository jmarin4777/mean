import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  showDallas(){
    return this._http.get('http://api.openweathermap.org/data/2.5/onecall?lat=32.7767&lon=-96.7970&exclude=minutely,hourly&appid=70ce3afe2fdffcf7c8ed24f755a7a561&units=imperial')
  }

  showSeattle(){
    return this._http.get('http://api.openweathermap.org/data/2.5/onecall?lat=47.6062&lon=-122.3321&exclude=minutely,hourly&appid=70ce3afe2fdffcf7c8ed24f755a7a561&units=imperial')
  }

  showSanJose(){
    return this._http.get('http://api.openweathermap.org/data/2.5/onecall?lat=37.3382&lon=-121.8863&exclude=minutely,hourly&appid=70ce3afe2fdffcf7c8ed24f755a7a561&units=imperial')
  }

  showBurbank(){
    return this._http.get('http://api.openweathermap.org/data/2.5/onecall?lat=34.1808&lon=-118.3090&exclude=minutely,hourly&appid=70ce3afe2fdffcf7c8ed24f755a7a561&units=imperial')
  }

  showDC(){
    return this._http.get('http://api.openweathermap.org/data/2.5/onecall?lat=38.9072&lon=-77.0369&exclude=minutely,hourly&appid=70ce3afe2fdffcf7c8ed24f755a7a561&units=imperial')
  }

  showChicago(){
    return this._http.get('http://api.openweathermap.org/data/2.5/onecall?lat=41.8781&lon=-87.6298&exclude=minutely,hourly&appid=70ce3afe2fdffcf7c8ed24f755a7a561&units=imperial')
  }
}
