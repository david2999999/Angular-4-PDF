import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchResult} from './search-result.model';
import {YoutubeSearchService} from './youtube-search.service';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/map';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-search-box',
  template: `
    <input type="text" class="form-control" placeholder="Search" autofocus>
  `
})

export class SearchBoxComponent implements OnInit{
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YoutubeSearchService, private el: ElementRef){
  }

  // On this input box we want to watch for keyup events. The thing is, if we simply did a search after
  // every keyup that wouldn’t work very well. There are three things we can do to improve the user
  // experience:
  // 1. Filter out any empty or short queries
  // 2. “debounce” the input, that is, don’t search on every character but only after the user has
  // stopped typing after a short amount of time
  // 3. discard any old searches, if the user has made a new search
  ngOnInit(): void {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
      .filter((text: string) => text.length > 1) // filter out if empty
      .debounceTime(250)  // only once every 250ms
      .do(() => this.loading.emit(true)) // enable loading
      // search, discarding old events if new input comes in
      .map((query: string) => this.youtube.search(query))
      .switch()
      // act on the return of the search
      .subscribe(
        (results: SearchResult[]) => { // on success
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any) => { // on error
          console.log(err);
          this.loading.emit(false);
        }, () => { // on completion
          this.loading.emit(false);
        });
  }
}

// By using switch we’re, essentially, saying “ignore all search events but the most recent”.
// That is, if a new search comes in, we want to use the most recent and discard the rest.

// 1. We call this.loading.emit(false), indicating we’ve stopped loading
// 2. We call this.results.emit(results), which will emit an event containing the list of results
