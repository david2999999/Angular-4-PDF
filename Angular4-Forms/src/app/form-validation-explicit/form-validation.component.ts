import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  /*1. We setup sku: AbstractControl at the top of the class and
  2. We assign this.sku after we’ve created myForm with the FormBuilder*/
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('You submitted value: ', JSON.stringify(value));
  }

}

/*This is great because it means we can reference sku anywhere in our component view. The downside
is that by doing it this way, we’d have to setup an instance variable for every field in our form.
For large forms, this can get pretty verbose.*/
