import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPrairies();
    this.showPrairie();
  };
  getPrairies(){
    let tempObservable = this._http.get('/prairies');
    tempObservable.subscribe(data => console.log("Got all the prairie dogs!", data));
  }

  showPrairie(){
    var id = '5ebc085c0fc8240b58602f16'
    let tempObservable = this._http.get('/prairies/' + id);
    tempObservable.subscribe(data => console.log("Found a prairie dog!", data));
  }
}
