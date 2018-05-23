import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { FormControlComponent } from './form-control/form-control.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormSkuComponent } from './form-sku/form-sku.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormValidationComponent } from './form-validation-explicit/form-validation.component';
import { FormValidationShorthandComponent } from './form-validation-shorthand/form-validation-shorthand.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';
import { FormWithEventComponent } from './form-with-event/form-with-event.component';
import { FormNgModelComponent } from './form-ng-model/form-ng-model.component';


@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    FormGroupComponent,
    FormSkuComponent,
    FormBuilderComponent,
    FormValidationComponent,
    FormValidationShorthandComponent,
    CustomValidationComponent,
    FormWithEventComponent,
    FormNgModelComponent
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
