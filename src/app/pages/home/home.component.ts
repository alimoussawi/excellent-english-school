import { Component, OnInit } from '@angular/core';
import gsap from "gsap";
import jump from "jump.js";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }
  jumpToContact(){
    jump('#contact',{
      duration: 1000,
    });
  }

}
