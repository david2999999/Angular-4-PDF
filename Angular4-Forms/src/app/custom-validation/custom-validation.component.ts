import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css']
})
export class CustomValidationComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    function skuValidator(control: FormControl): {[s: string]: boolean} {
      if (!control.value.match(/^123/)) {
        return {invalidSku: true};
      }
    }

    this.myForm = fb.group({
      'sku': ['', Validators.compose([
        Validators.required, skuValidator
      ])]
    });
  }

  ngOnInit() {

  }

  onSubmit(value: string): void {
    console.log('You submitted value: ', JSON.stringify(value));
  }



}
