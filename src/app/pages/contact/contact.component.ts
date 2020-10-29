import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.contactForm=this.formBuilder.group({
      name:["",[Validators.required,Validators.minLength(3)]],
      email:["",[Validators.required,Validators.email]],
      phone:["",[Validators.required,Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
      message:["",[Validators.required,Validators.minLength(6)]]
    });
  }

  onSubmit(){
    this.submitted=true;
    if(this.contactForm.invalid){
      alert(JSON.stringify(this.contactForm.errors))
      return;
    }
    alert("sucess sign up"+JSON.stringify(this.contactForm.value));
  }

  get h(){
    return this.contactForm.controls;
  }
}
