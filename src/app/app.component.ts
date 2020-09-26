import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {DOCUMENT} from "@angular/common";
import { Renderer2 } from '@angular/core';


gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  ngOnInit(){
    
  }
/*  
  textAnimation():void{
    let timeline1=gsap.timeline({defaults:{ease:"power1.out"}});
    timeline1.to(".text",{y:"0%",duration:1,stagger:0.5});
    timeline1.to(".slider",{y:"-100%",duration:1.5,delay:0.5});
    timeline1.to(".intro",{y:"-100%",duration:1.5,delay:0.5},"-=2");
    timeline1.fromTo("nav",{opacity:0},{opacity:1,duration:1});
    timeline1.fromTo(".big-text",{opacity:0},{opacity:1,duration:1},"-=1");
  }
*/

  

}

  