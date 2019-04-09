import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TheSmartPhone';

  constructor(@Inject(DOCUMENT) private document: Document) {  }

  ngOnInit(){
    this.document.body.style.margin = '0px';
    this.document.body.style.padding = '0px';
    this.document.body.style.overflow = 'hidden';
  }
}
