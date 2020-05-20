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
  prairie:any;
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

  show(prairie_id){
    let observable = this._httpService.showPrairie(prairie_id);
    observable.subscribe(data =>{
      console.log("Got this prairie dog's info!", data);
      this.prairie = data;
      setTimeout(() => {
        window.scrollTo(0,document.body.scrollHeight);
      }, 100);
    })
  }
}
