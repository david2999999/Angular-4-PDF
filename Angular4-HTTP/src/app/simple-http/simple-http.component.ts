import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
// 1. Have a button that calls makeRequest
// 2. makeRequest will call the http library to perform a GET request on our API
// 3. When the request returns, we’ll update this.data with the results of the data, which will be
// rendered in the view.
export class SimpleHttpComponent implements OnInit {
  // We have two instance variables: data and loading. This will be used for our API return value and
  // loading indicator respectively.
  data: object;
  loading: boolean;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  makeRequest(): void {
    this.loading = true;
    // To make an HTTP request is straightforward: we call this.http.request and pass the URL to which
    // we want to make a GET request.
    // http.request returns an Observable. We can subscribe to changes (akin to using then from a
    // Promise) using subscribe.
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        // When our http.request returns (from the server) the stream will emit a Response object. We extract
        // the body of the response as an Object by using json and then we set this.data to that Object.
        this.data = res.json();
        this.loading = false;
      });
  }
}

// .subscribe can also handle failures and stream completion by passing a function to the
// second and third arguments respectively. In a production app it would be a good idea to
// handle those cases, too. That is, this.loading should also be set to false if the request
// fails (i.e. the stream emits an error).
