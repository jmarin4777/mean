import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  weather:any;
  ngOnInit() {
    this.getWeather();
  }

  getWeather(){
    let observable = this._httpService.showDC();
    observable.subscribe(data => {
      console.log("Here's Washington DC!", data);
      this.weather = data;
    })
  }

}
