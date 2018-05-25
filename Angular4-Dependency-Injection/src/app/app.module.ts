import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import {SuiModule} from 'ng2-semantic-ui';
import {UserService} from './services/user.service';
import { NgModuleDiComponent } from './ng-module-di/ng-module-di.component';
import {AnalyticsService} from './analytics/analytics.service';
import {AnalyticsImplementation, Metric} from './analytics/analytics.interface';
import {Http, HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent,
    NgModuleDiComponent
  ],
  imports: [
    SuiModule,
    BrowserModule,
    HttpModule
  ],
  providers: [
    UserService,

    // Say that we wanted to configure our AnalyticsImplementation to make an HTTP request to a
    // particular URL. In order to do this we’d need:
    // • The Angular Http client and
    // • Our API_URL value
    // add our API_URL provider
    {provide: 'API_URL', useValue: 'http://devserver.com'},


    // • create an implementation that conforms to AnalyticsImplementation and
    // • add it to providers with useFactory
    {
      // `AnalyticsService` is the _token_ we use to inject
      // note, the token is the class, but it's just used as an identifier!
      provide: AnalyticsService,

      // add our `deps` to specify the factory dependencies
      // new key: deps. deps is an array of injection tokens and these tokens will be resolved
      // and passed as arguments to the factory function.
      deps: [Http, 'API_URL'],

      // useFactory is a function - whatever is returned from this function
      // will be injected
      useFactory(http: Http, apiURL: string) {

        // create an implementation that will log the event
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('Sending to: ', apiURL);
            // ... You'd send the metric using http here ...
          }
        };

        return new AnalyticsService(loggingImplementation);
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// useFactory takes a function and whatever this function returns will be injected.
// Also note that we provide AnalyticsService. Again, when we use provide this way, we’re using
// the class AnalyticsService as the identifying token of what we’re going to inject. (If you wanted
// to be confusing, you could use a completely separate class, or less-confusingly a string.)
// In useFactory we’re creating an AnalyticsImplementation object that has one function: recordEvent.
// recordEvent is where we could, in theory, configure what happens when an event is recorded.
// Again, in a real app this would probably send an event to Google Analytics or a custom event logging
// software.
// Lastly, we instantiate our AnalyticsService and return it.
