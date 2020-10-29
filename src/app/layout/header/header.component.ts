import { Component, HostListener, OnInit, ViewChild,ElementRef } from '@angular/core';
import gsap from "gsap";
import jump from 'jump.js'



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   @ViewChild("navbar") navbar:ElementRef;
   @ViewChild("burger") burger:ElementRef;
   @ViewChild("homeBtn") homeBtn:ElementRef;
   @ViewChild("aboutBtn") aboutBtn:ElementRef;
   @ViewChild("coursesBtn") coursesBtn:ElementRef;
   @ViewChild("contactBtn") contactBtn:ElementRef;

   windowWidth:number;
  constructor(){}
  title = 'excelent-english-school';
  burgerClicked:boolean=true;
  lang;

  ngOnInit(){
    this.lang=localStorage.getItem('lang') || 'en';
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
    this.disableButtons();
    jump('#Home',{
      duration: 1000,
      callback:()=>{
        this.enableButtons();
      }
    });
    if(this.windowWidth<900)    this.closeNavSlide();
  }
  goToAboutUs(){
    this.disableButtons();
    jump('#About',{
      duration: 1000,
      offset: -100,
      callback:()=>{
        this.enableButtons();
      }
    });
    if(this.windowWidth<900)    this.closeNavSlide();
  }
  goToCourses(){
    this.disableButtons();
    jump('#Courses',{
      duration: 1000,
      offset: -100,
      callback:()=>{
        this.enableButtons();
      }
    });
    if(this.windowWidth<900)    this.closeNavSlide();
  }
  goToContact(){
    this.disableButtons();
    jump('#contact',{
      duration: 1000,
      offset: -100,
      callback:()=>{
      this.enableButtons();
      }
    });
    if(this.windowWidth<900)    this.closeNavSlide();
  }
  
  navSlide(){
    if(this.windowWidth<900){
    let timeline=gsap.timeline({defaults:{ease:"power1.out"}});
    if(this.burgerClicked){
      timeline.to(".nav-links",{display:"flex",opacity:"1",duration:1});
      timeline.to(".nav-links li",{opacity:"1",visibility:"visible",duration:1,stagger:0.25},"-=1");
    }
    else{ 
      timeline.to(".nav-links",{display:"none",opacity:"0",duration:1});
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

changeLang(lang){
  localStorage.setItem('lang',lang);
  window.location.reload();
}
disableButtons(){
  this.homeBtn.nativeElement.classList.add("disabled");
  this.aboutBtn.nativeElement.classList.add("disabled");
  this.coursesBtn.nativeElement.classList.add("disabled");
  this.contactBtn.nativeElement.classList.add("disabled");
}
enableButtons(){
 this.homeBtn.nativeElement.classList.remove("disabled");
 this.aboutBtn.nativeElement.classList.remove("disabled");
 this.coursesBtn.nativeElement.classList.remove("disabled");
 this.contactBtn.nativeElement.classList.remove("disabled");
}
}
