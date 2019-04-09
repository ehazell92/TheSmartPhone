import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-phone-icons',
  templateUrl: './phone-icons.component.html',
  styleUrls: ['./phone-icons.component.css']
})
export class PhoneIconsComponent implements OnInit {


  @Output() isLoad = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  iconTrigger() {
    this.isLoad.emit(true);
  }

}
