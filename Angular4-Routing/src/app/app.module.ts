import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {Routes} from '@angular/router';

// • path specifies the URL this route will handle
// • component is what ties a given route path to a component that will handle the route
// • the optional redirectTo is used to redirect a given path to an existing route
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contactus', redirectTo: 'contact'},

  // authentication demo
  {path: 'login', component: LoginComponent},
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGuard]
  },

  // nested
  {
    path: 'products',
    component: ProductsComponent,
    children: childRoutes
  }
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
