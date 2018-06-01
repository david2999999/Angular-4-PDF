import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../service/spotify.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;

  constructor(
    private spotify: SpotifyService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
    });
  }

  ngOnInit() {
  }

}

// • query for current search term and
// • results for the search results

// On the constructor we’re injecting the SpotifyService (that we created above), Router, and the
// ActivatedRoute and making them properties of our class.

// In our constructor we subscribe to the queryParams property - this lets us access query parameters,
// such as the search term (params['query']).
// In a URL like: http://localhost/#/search?query=cats&order=ascending, queryParams gives us
// the parameters in an object. This means we could access the order with params['order'] (in this
// case, ascending).

// Also note that queryParams are different than route.params. Whereas route.params match parameters
// in the route queryParams match parameters in the query string.
// In this case, if there is no query param, we set this.query to the empty string.
