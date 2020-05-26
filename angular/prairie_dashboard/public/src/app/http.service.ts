import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getPrairies();
    // this.showPrairie();
  };
  getPrairies(){
    // let tempObservable = this._http.get('/prairies');
    // tempObservable.subscribe(data => console.log("Got all the prairie dogs!", data));
    return this._http.get('/prairies')
  }

  showPrairie(prairie_id){
    // let tempObservable = this._http.get('/prairies/' + prairie_id);
    // tempObservable.subscribe(data => console.log("Found a prairie dog!", data));
    return this._http.get('/prairies/' + prairie_id)
  }

  addPrairie(addPrairie){
    return this._http.post('/prairies', addPrairie)
  }

  updatePrairie(prairie_id, editPrairie){
    return this._http.post('/prairies/' + prairie_id + '/update', editPrairie)
  }

  destroyPrairie(prairie_id){
    return this._http.get('/prairies/' + prairie_id + '/destroy')
  }
}
