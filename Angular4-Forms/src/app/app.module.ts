import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { FormControlComponent } from './form-control/form-control.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormGroupComponent } from './form-group/form-group.component';


@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    FormGroupComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
