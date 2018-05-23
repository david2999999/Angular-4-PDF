import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-with-event',
  templateUrl: './form-with-event.component.html',
  styleUrls: ['./form-with-event.component.css']
})
export class FormWithEventComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  /*To watch for changes on a control we:
  1. get access to the EventEmitter by calling control.valueChanges. Then we
  2. add an observer using the .subscribe method*/
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to: ', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to: ', form);
      }
    );
  }

  ngOnInit() {
  }

}
