import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  cakes:any = [];
  cake:any;
  newCake:any;
  newRating:any = [];

  constructor(private _httpService: HttpService) {}

  ngOnInit(){
    this.getCakes();
    this.newCake = {baker_name: "", image: ""};
  }

  getCakes(){
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("Got all the cakes!", data);
      this.cakes = data;
      for(let i=0;i<this.cakes.length;i++){
        this.newRating.push({rating: "5", comment: ""});
      }
    })
  }

  createCake(){
    let observable = this._httpService.createCake(this.newCake);
    observable.subscribe(data => {
      console.log("Submitted a new cake!", data);
      this.getCakes();
      this.newCake = {baker_name: "", image: ""};
    })
  }

  createRating(i,cake_id){
    this.newRating[i]["cake_id"] = cake_id;
    let observable = this._httpService.createRating(this.newRating[i]);
    observable.subscribe(data => {
      console.log("Submtted a rating!", data);
      this.newRating[i] = {rating: "5", comment: ""}
      if(this.cake){
        this.show(cake_id);
      }
    })
  }

  show(cake_id){
    let observable = this._httpService.showCake(cake_id);
    observable.subscribe(data => {
      console.log("Got a cake's info!", data);
      this.cake = data;
      if(this.cake.ratings.length > 0){
        let sum = 0;
        for(let rating of this.cake.ratings){
          sum += Number(rating.rating);
        }
        this.cake["avg"] = Number((sum / this.cake.ratings.length).toFixed(2));
      } else{
        this.cake["avg"] = "";
      }
    })
  }
}
