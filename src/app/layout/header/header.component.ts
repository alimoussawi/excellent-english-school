import { Component, HostListener, OnInit, Renderer2, ViewChild,ElementRef } from '@angular/core';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import jump from 'jump.js'


gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   @ViewChild("navbar") navbar:ElementRef;
   @ViewChild("burger") burger:ElementRef;
    windowWidth:number;
  constructor(private renderer:Renderer2){}
  title = 'excelent-english-school';
  burgerClicked:boolean=true;
 
  ngOnInit(){
    this.windowWidth = window.innerWidth;
    let timeline=gsap.timeline({defaults:{ease:"power1.out"}});
    timeline.to(".logo",{opacity:"1",duration:2});
  }
  @HostListener('window:scroll', ['$event'])
    onScroll($event) {
      console.log($event);
      console.log("scrolling");
      if(window.pageYOffset > this.navbar.nativeElement.clientHeight){
        this.navbar.nativeElement.setAttribute('style','background-color: #3F3D56');
        this.burger.nativeElement.children[0].setAttribute('style','background-color: #9BCC8A');
        this.burger.nativeElement.children[1].setAttribute('style','background-color: #9BCC8A');
        this.burger.nativeElement.children[2].setAttribute('style','background-color: #9BCC8A');

      }
      else{ 
        this.navbar.nativeElement.setAttribute('style','background-color:');
        this.burger.nativeElement.children[0].setAttribute('style','background-color: #3F3D56');
        this.burger.nativeElement.children[1].setAttribute('style','background-color: #3F3D56');
        this.burger.nativeElement.children[2].setAttribute('style','background-color: #3F3D56');
      }
    }
  
  goToHome(){
    jump('#Home',{
      duration: 1000,
    });
    if(this.windowWidth<768)    this.closeNavSlide();

  }
  goToContact(){
    jump('#contact',{
      duration: 1000,
    });
    if(this.windowWidth<768)    this.closeNavSlide();
  }
  goToCourses(){
    jump('#contact',{
      duration: 1000,
    });
  }
  goToTest(){
    jump('#contact',{
      duration: 1000,
    });
  }
  navSlide(){
    if(this.windowWidth<768){
    let timeline=gsap.timeline({defaults:{ease:"power1.out"}});
    if(this.burgerClicked){
      timeline.to(".nav-links",{opacity:"1",duration:1});
      timeline.to(".nav-links li",{opacity:"1",visibility:"visible",duration:1,stagger:0.25},"-=1");
    }
    else{ 
      timeline.to(".nav-links",{opacity:"0",duration:1});
      timeline.to(".nav-links li",{opacity:"0",visibility:"hidden",duration:1,stagger:0.25},"-=1");
    }
    this.burgerClicked=!this.burgerClicked;
  }
}
@HostListener('window:resize', ['$event'])
onResize(event) {
  console.log(event.target.innerWidth);
  this.windowWidth=event.target.innerWidth;
  
}

closeNavSlide(){
  this.burgerClicked=false;
  this.navSlide();
}
}
