import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  powerTogg: boolean = false;
  constructor() { }

  ngOnInit() {
    // this.powerTogg = false;
  }

  powerToggle(){
    this.powerTogg = !this.powerTogg;
    if(!this.powerTogg){
      window.location.href = '/home';
    }
  }

}
