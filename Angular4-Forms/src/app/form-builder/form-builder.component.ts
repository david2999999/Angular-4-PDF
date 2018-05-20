import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  /*myForm is typed to be a FormGroup. We create a FormGroup by calling fb.group(). .group takes an
  object of key-value pairs that specify the FormControls in this group.
  In this case, we’re setting up one control sku, and the value is ["ABC123"] - this says that the default
  value of this control is "ABC123". (You’ll notice that is an array. That’s because we’ll be adding more
  configuration options there later.)*/
  myForm: FormGroup;

  /*There are two main functions we’ll use on FormBuilder:
    • control - creates a new FormControl
    • group - creates a new FormGroup*/
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku' : ['ABC123']
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('You Submitted the value: ' + JSON.stringify(value));
  }
}
