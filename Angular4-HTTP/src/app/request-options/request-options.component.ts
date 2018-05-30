import { Component, OnInit } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

@Component({
  selector: 'app-request-options',
  templateUrl: './request-options.component.html',
  styleUrls: ['./request-options.component.css']
})
export class RequestOptionsComponent implements OnInit {
  data: any;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  makeHeaders(): void {
    const headers: Headers = new Headers();
    headers.append('X-API-TOKEN', 'ng-book');

    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
      .subscribe((res: Response) => {
        this.data = res.json();
      });
  }

}


// All of the http methods we’ve covered so far also take an optional last argument: RequestOptions.
// The RequestOptions object encapsulates:
// • method
// • headers
// • body
// • mode
// • credentials
// • cache
// • url
// • search
// Let’s say we want to craft a GET request that uses a special X-API-TOKEN header. We can create a
// request with this header like so:
