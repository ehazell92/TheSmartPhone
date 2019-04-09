import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material';

@Component({
  selector: 'app-phone-screen',
  templateUrl: './phone-screen.component.html',
  styleUrls: ['./phone-screen.component.css']
})
export class PhoneScreenComponent implements OnChanges {

  @Input() powerTogg: any;
  @ViewChild('mainS') mainScreen: ElementRef;
  @ViewChild('gLoad') goggLoad: ElementRef;
  @ViewChild('aScreen') actScreen: ElementRef;

  isLoaded: any;

  constructor() { }

  ngOnChanges() {
    if(this.powerTogg){ 
      this.mainScreen.nativeElement.classList.replace('off','on');      
      this.bootUp(this.goggLoad, this.actScreen, this.mainScreen);
    }

  }

  bootUp(gL, aS, mS){
    setTimeout(function(){
      gL.nativeElement.classList.replace('on', 'off');
      mS.nativeElement.classList.replace('mainSColor', 'mainSImg');
      aS.nativeElement.classList.replace('off', 'on');
      this.isLoaded = false;
    }, 6000);
  }

  isLoadChange(v){
    this.isLoaded = true;
    let topBar = document.getElementsByClassName('serviceBar')[0];
    let noti = document.getElementsByClassName('notifications')[0], servi = document.getElementsByClassName('service')[0];

    topBar.classList.add('serviceBarGH');
    noti.classList.add('notificationsGH');
    servi.classList.add('serviceGH');

  }


}
