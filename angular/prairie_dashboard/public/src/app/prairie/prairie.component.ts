import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prairie',
  templateUrl: './prairie.component.html',
  styleUrls: ['./prairie.component.css']
})
export class PrairieComponent implements OnInit {
  @Input() prairieToShow: any;
  @Input() display: boolean;
  @Output() updateEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  edit(){
    this.display = true;
    setTimeout(() => {
      window.scrollTo(0,document.body.scrollHeight);
    }, 100);
  }

  updatedPrairie(eventData){
    this.prairieToShow.name = eventData.name;
    this.prairieToShow.hobby = eventData.hobby;
    this.prairieToShow.image = eventData.image;
    this.display = false;
    this.updateEvent.emit();
  }

}
