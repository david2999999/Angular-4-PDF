import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { FormControlComponent } from './form-control/form-control.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormSkuComponent } from './form-sku/form-sku.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormValidationComponent } from './form-validation/form-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    FormGroupComponent,
    FormSkuComponent,
    FormBuilderComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
