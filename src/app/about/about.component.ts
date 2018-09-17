import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareRouting } from '../app.service';


@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  onSubmit() {
    if (this.form.valid) {
      document.getElementById("valid").innerHTML = "Form is Valid";
    }
    else {
      document.getElementById("valid").innerHTML = "Form is invalid";
    }
  }

  ResetForm(args: any){
    this.form.reset();
    document.getElementById("valid").innerHTML = "";
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      range: [null, [Validators.required]],
       date: [null, [Validators.required]],
       datetime: [null, [Validators.required]],
       time: [null, [Validators.required]],
    });
  }

}