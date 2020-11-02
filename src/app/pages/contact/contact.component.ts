import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  constructor(private formBuilder:FormBuilder,private http:HttpClient){ }

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
      return;
    }
    else{    
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      const body=new HttpParams()
      .set('form-name','contact')
      .append('name',this.contactForm.value.name)
      .append('email',this.contactForm.value.email)
      .append('phone',this.contactForm.value.phone)
      .append('message',this.contactForm.value.message);
      this.http.post<any>('/done/', body.toString(),{headers,responseType:'text' as 'json'}).subscribe(
        res => {
          this.contactForm.reset();
          this.submitted=false;
          return res;
        }
      );
    }
  }

  get h(){
    return this.contactForm.controls;
  }
}
