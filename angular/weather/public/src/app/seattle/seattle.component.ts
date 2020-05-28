import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  weather:any;
  ngOnInit() {
    this.getWeather();
  }

  getWeather(){
    let observable = this._httpService.showSeattle();
    observable.subscribe(data => {
      console.log("Here's Seattle!", data);
      this.weather = data;
    })
  }

}
