import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import {SuiModule} from 'ng2-semantic-ui';


@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent
  ],
  imports: [
    SuiModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
