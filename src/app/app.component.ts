import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { slider } from "./router-animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    slider,
  ]
})


export class AppComponent implements OnInit {
  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('en');
    this.translate.use(localStorage.getItem('lang')|| 'en');
  }
  ngOnInit(){
    
  }
  prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData &&outlet.activatedRouteData['animation'];
  }
}

  