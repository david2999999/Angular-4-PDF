import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {APP_BASE_HREF, HashLocationStrategy} from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { ProductComponent } from './product/product.component';

// • path specifies the URL this route will handle
// • component is what ties a given route path to a component that will handle the route
// • the optional redirectTo is used to redirect a given path to an existing route
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contactus', redirectTo: 'contact'},
  {path: 'product/:id', component: ProductComponent}
  // // authentication demo
  // {path: 'login', component: LoginComponent},
  // {
  //   path: 'protected',
  //   component: ProtectedComponent,
  //   canActivate: [LoggedInGuard]
  // },
  //
  // // nested
  // {
  //   path: 'products',
  //   component: ProductsComponent,
  //   children: childRoutes
  // }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProtectedComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

    // added this for our child module
    // ProductsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    // uncomment this for "hash-bang" routing
    // {provide: LocalStrategy, useClass: HashLocationStrategy},
    // AUTH_PROVIDERS,
    // LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Sometimes though, coders of an Angular application don’t have access to the head section of the
// application HTML. This is true for instance, when reusing headers and footers of a larger, preexisting
// application.
// Fortunately there is a workaround for this case. You can declare the application base path
// programmatically, when configuring our NgModule by using the APP_BASE_HREF provider:


// In our imports we have RouterModule.forRoot(routes). RouterModule.forRoot(routes) is a
// function that will take our routes, configure the router, and return a list of dependencies like
// RouteRegistry, Location, and several other classes that are necessary to make routing work.
