import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { CourseModel } from 'src/app/models/course-model';
import {TranslateService} from "@ngx-translate/core"
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  test:string;
  courseId:string;
  courseName:string;
  courseLevels:any[];
  lvl2:any;
  constructor(private activeRoute:ActivatedRoute, private translateService:TranslateService) { 
  this.activeRoute.params.subscribe(params =>{
    this.courseId=params['id'];
  });
  }

  ngOnInit(): void {
    console.log(this.courseId);
    this.getCourseData(this.courseId);
  }

  getCourseData(courseId:string){
    switch (courseId) {
      case "childrenCourse":
        this.getChildrenCourseInfo();
        break;    
        case "adultCourse":
        this.getAdultCourseInfo();
        break
        case "examCourse":
        this.getExamCourseInfo();
        break
      default:
        break;
    }
  }
  getChildrenCourseInfo(){
    this.translateService.get('CourseDetails.childrenCourse.courseName')
    .subscribe(result=>{this.courseName=result;});
    this.translateService.get('CourseDetails.childrenCourse.courseLevels')
    .subscribe(result=>{this.courseLevels=result;});
  }
  getAdultCourseInfo(){
    this.translateService.get('CourseDetails.adultCourse.courseName')
    .subscribe(result=>{this.courseName=result;});
    this.translateService.get('CourseDetails.adultCourse.courseLevels')
    .subscribe(result=>{this.courseLevels=result;},(err)=>console.log(err),/*oncomplete callback here */);
    

  }
  getExamCourseInfo(){
    this.translateService.get('CourseDetails.examCourse.courseName')
    .subscribe(result=>{this.courseName=result;});
    this.translateService.get('CourseDetails.examCourse.courseLevels')
    .subscribe(result=>{this.courseLevels=result;});
  }
}


/**
 * this.childrenCourse=new CourseModel(stringify(this.translateService.get('CourseDetails.childrenCourse.courseName')) ,
    [{ "levelName": "Pre-Starters 1.1", "levelCode": "pre A1","levelDuration":"72 hours/36 weeks","levelAge": "age: 5-6 years old",
    "levelDesc":`Pre - Starters 1.1 is a course for preschool children who are just starting to learn English. 
    The course consists of lessons on writing, reading, listening and acting with numbers. 
    The learning process is built on a simple, for perception, colorful material that motivates to study lessons and to approach new topics with interest. 
    The structure of the First Friends 1 course is structured  in an understandable form, with a smooth transition from easy to harder lessons.
    After completing this course, children will know the alphabet, numbers from 1 to 10, basic phrases.
    This course is a good start in preparing for language learning in school.`},
    { "levelName": "Pre-Starters 1.2", "levelCode": "pre A1","levelDuration":"72 hours 36 weeks","levelAge": "age: 6-7 years old",
    "levelDesc":`Pre - Starters 1.2 is the second part of a two-part course. After passing the first level, which dealt with easier topics, in the second part you will find more difficult topics, but despite this, the study is still just as fun and exciting. First Friends 2  will be a good support for the transition to the next levels of English learning.
    During this course, children will learn the numbers from 1 to 20, they will perform easy mathematical examples for addition and subtraction, get acquainted with the basic letter combinations and will be able to use them when speaking and reading, basic phrases and grammatical constructions. Writing and reading skills will be enhanced.
    This course is a good start in preparing for language learning in school.`},
    { "levelName": "Pre-Starters", "levelCode": "pre A1","levelDuration":"72 hours 36 weeks","levelAge": "age: 6-7 years old",
    "levelDesc":`Pre - Starters - This course is suitable for children who have already started first grade, but have not yet studied English. Classes are held in an interactive form, the emphasis is on developing writing, reading, listening and speaking skills through full immersion in the language environment: all lessons are held in English using authentic textbooks and books for reading, watching training videos.
    for 9 months :
    - children will learn the alphabet, numbers from 1 to 20, perform easy mathematical examples for addition and subtraction, get acquainted with the basic letter combinations and be able to use them when speaking and reading
    - children will learn basic phrases and be able to freely support a conversation about themselves, their interests, family, weather, etc.
    - children will learn to write, read and listen to more than 150 words and phrases in context..`},
  
  ]);
 */
