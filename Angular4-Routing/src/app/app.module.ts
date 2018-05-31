import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

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
    AppCom,
    HomeComponent,
    AboutComponent,
    ContactComponentponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

    // added this for our child module
    ProductsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Sometimes though, coders of an Angular application don’t have access to the head section of the
// application HTML. This is true for instance, when reusing headers and footers of a larger, preexisting
// application.
// Fortunately there is a workaround for this case. You can declare the application base path
// programmatically, when configuring our NgModule by using the APP_BASE_HREF provider:
