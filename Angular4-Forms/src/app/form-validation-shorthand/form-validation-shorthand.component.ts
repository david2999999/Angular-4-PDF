import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-validation-shorthand',
  templateUrl: './form-validation-shorthand.component.html',
  styleUrls: ['./form-validation-shorthand.component.css']
})
export class FormValidationShorthandComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('You submitted value: ', JSON.stringify(value));
  }

}
