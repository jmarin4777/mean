import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  prairies:any = [];
  prairie:any;
  displayEdit:boolean;
  newPrairie:any;
  constructor(private _httpService: HttpService) {};

  ngOnInit(){
    this.getPrairiesFromService();
    this.newPrairie = {name: "", hobby: "", image: ""};
  }

  getPrairiesFromService(){
    let observable = this._httpService.getPrairies();
    observable.subscribe(data =>{
      console.log("Got all the prairie dogs!", data);
      this.prairies = data;
    })
  }

  show(prairie_id){
    this.prairie = false;
    this.displayEdit = false;
    let observable = this._httpService.showPrairie(prairie_id);
    observable.subscribe(data =>{
      console.log("Got this prairie dog's info!", data);
      this.prairie = data;
      setTimeout(() => {
        window.scrollTo(0,document.body.scrollHeight);
      }, 100);
    })
  }

  create(){
    let observable = this._httpService.addPrairie(this.newPrairie);
    observable.subscribe(data =>{
      console.log("Added a prairie dog!", data);
      this.getPrairiesFromService();
      this.newPrairie = {name: "", hobby: "", image: ""};
    })
  }

  destroy(prairie_id){
    let observable = this._httpService.destroyPrairie(prairie_id);
    observable.subscribe(data =>{
      console.log("Deleted a prairie dog!", data);
      this.getPrairiesFromService();
    })
  }

  updatedPrairie(){
    this.getPrairiesFromService();
  }
}
