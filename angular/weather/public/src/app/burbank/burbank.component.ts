import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  weather:any;
  ngOnInit() {
    this.getWeather();
  }

  getWeather(){
    let observable = this._httpService.showBurbank();
    observable.subscribe(data => {
      console.log("Here's Burbank!", data);
      this.weather = data;
    })
  }

}
