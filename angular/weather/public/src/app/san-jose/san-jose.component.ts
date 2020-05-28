import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  weather:any;
  ngOnInit() {
    this.getWeather();
  }

  getWeather(){
    let observable = this._httpService.showSanJose();
    observable.subscribe(data => {
      console.log("Here's San Jose!", data);
      this.weather = data;
    })
  }

}
