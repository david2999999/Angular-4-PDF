import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {SuiModule} from 'ng2-semantic-ui';
import {Http, HttpModule} from '@angular/http';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import {youTubeSearchInjectables} from './youtube-search/youtube-search.injectables';
import {YoutubeSearchService} from './youtube-search/youtube-search.service';
import {SearchBoxComponent} from './youtube-search/search-box.component';
import {SearchResultComponent} from './youtube-search/search-result.component';
import {YoutubeSearchComponent} from './youtube-search/youtube-search.component';
import { PostRequestComponent } from './post-request/post-request.component';
import { DeleteRequestComponent } from './delete-request/delete-request.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    SearchBoxComponent,
    SearchResultComponent,
    YoutubeSearchComponent,
    PostRequestComponent,
    DeleteRequestComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    HttpModule
  ],
  providers: [
    youTubeSearchInjectables,
  //   {provide: 'YOUTUBE_API_KEY', useValue: 'AIzaSyDXZ4kwxSqz4-CZ0gKVdH9ooTKfvoB7vvY'},
  //   {provide: 'YOUTUBE_API_URL', useValue: 'https://www.googleapis.com/youtube/v3/search'},
  //   {
  //     provide: YoutubeSearchService,
  //
  //     deps: [Http, 'YOUTUBE_API_KEY', 'YOUTUBE_API_URL'],
  //
  //     useFactory(http: Http, youtubeKey: string, youtubeUrl: string){
  //       return new YoutubeSearchService(http, youtubeKey, youtubeUrl);
  //     }
  //   }
  // ],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
