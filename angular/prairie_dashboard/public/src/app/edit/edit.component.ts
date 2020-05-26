import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() prairieToEdit: any;
  @Output() updateEvent = new EventEmitter();
  editPrairie: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.editPrairie = {name: this.prairieToEdit.name, hobby: this.prairieToEdit.hobby, image: this.prairieToEdit.image}
  }

  update(prairie_id){
    let observable = this._httpService.updatePrairie(prairie_id, this.editPrairie);
    observable.subscribe(data =>{
      console.log("Updated a prairie dog!", data);
      this.updateEvent.emit(this.editPrairie);
    })
  }
}
