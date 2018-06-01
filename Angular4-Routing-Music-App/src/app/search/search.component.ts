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

  // As we pointed out above, we want to be able to jump straight into the results if the URL includes a
  // search query.
  // To do that, we are going to implement a hook Angular router provides for us to run whenever our
  // component is initialized.
  // But isn’t that what constructors are for? Well, yes and no. Yes, constructors are used to
  // initialize values, but if you want to write good, testable code, you want to minimize the side
  // effects of constructing an object. So keep in mind that you should put your component’s
  // initialization logic always on a hook like below.
  ngOnInit() {
    this.search();
  }

  search(): void {
    console.log('this.query', this.query);
    if (!this.query) {
      return;
    }

    this.spotify.searchTrack(this.query).subscribe((res: any) =>
      this.renderResults(res));
  }

  // We declared results as a component property. Whenever its value is changed, the view will be
  // automatically updated by Angular.
  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }

  // We’re manually telling the router to navigate to the search route, and providing a query parameter,
  // then performing the actual search.
  // Doing things this way gives us a great benefit: if we reload the browser, we’re going to see the same
  // search result rendered. We can say that we’re persisting the search term on the URL.
  submit(query: string): void {
    this.router.navigate(['search'], {queryParams: {query: query}}).
      then(_ => this.search());
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
