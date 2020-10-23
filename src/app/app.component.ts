import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import gsap from "gsap";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('en');
    this.translate.use(localStorage.getItem('lang')|| 'en');
  }
  ngOnInit(){
    
  }
}

  