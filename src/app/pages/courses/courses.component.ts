import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from "gsap";
import jump from 'jump.js'
import { CourseModel} from "../../models/course-model";
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  constructor() { 
  }
  timeline=gsap.timeline();
  ngOnInit(): void {
    
  }
  jumpUp(){
    jump('#Home',{
      duration: 0,
    });
  }
}
