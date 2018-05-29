import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {SuiModule} from 'ng2-semantic-ui';
import {HttpModule} from '@angular/http';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import {youTubeSearchInjectables} from './youtube-search/youtube-search.injectables';


@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    HttpModule
  ],
  providers: [
    youTubeSearchInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
