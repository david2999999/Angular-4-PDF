import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import {SuiModule} from 'ng2-semantic-ui';
import {UserService} from './services/user.service';
import { NgModuleDiComponent } from './ng-module-di/ng-module-di.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent,
    NgModuleDiComponent
  ],
  imports: [
    SuiModule,
    BrowserModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
