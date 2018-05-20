import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const personInfo = new FormGroup({
      firstName: new FormControl('Nate'),
      lastName: new FormControl('Murray'),
      zip: new FormControl('90210')
    });

    personInfo.value; // returns an object with the traits ^^

    personInfo.errors; // -> StringMap<string, any> of errors
    personInfo.dirty; // -> false
    personInfo.valid; // -> true
  }

}
