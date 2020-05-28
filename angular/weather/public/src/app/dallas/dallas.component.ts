import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  weather:any;
  ngOnInit() {
    this.getWeather();
  }

  getWeather(){
    let observable = this._httpService.showDallas();
    observable.subscribe(data => {
      console.log("Here's Dallas!", data);
      this.weather = data;
    })
  }
  
}
