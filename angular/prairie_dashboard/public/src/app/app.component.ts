import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  prairies:any = [];

  constructor(private _httpService: HttpService) {};

  ngOnInit(){
    this.getPrairiesFromService();
  }

  getPrairiesFromService(){
    let observable = this._httpService.getPrairies();
    observable.subscribe(data =>{
      console.log("Got all the prairie dogs!", data);
      this.prairies = data;
    })
  }
}
