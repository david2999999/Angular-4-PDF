import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit() {
    // create a new FormControl with the value "Nate"
    const nameControl = new FormControl('Nate');
    this.name = nameControl.value;

    // query the control for certain values
    nameControl.errors; // -> StringMap<string, any> of errors
    nameControl.dirty; // -> false
    nameControl.valid; // -> true
  }

}
