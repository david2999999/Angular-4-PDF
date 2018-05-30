import {Component, Input, OnInit} from '@angular/core';
import {SearchResult} from './search-result.model';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html'
})

export class YoutubeSearchComponent implements OnInit {
  results: SearchResult[];
  loading: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  updateResult(results: SearchResult[]): void {
    this.results = results;
  }
}
