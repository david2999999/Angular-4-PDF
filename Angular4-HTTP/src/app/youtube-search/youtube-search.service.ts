import {Inject, Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SearchResult} from './search-result.model';

const YOUTUBE_API_KEY = 'AIzaSyDWvq7JXzj2ZaxhA-8Y67GfUH9z72Wv5fI';
const YOUTUBE_API_URL =  'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YoutubeSearchService {

  constructor(private http: Http,
              @Inject(YOUTUBE_API_KEY) private apiKey: string,
              @Inject(YOUTUBE_API_URL) private apiUrl: string) {
  }

  search(query: string): Observable<SearchResult[]> {
    // We’re building the queryUrl in a manual way here. We start by simply putting the query params in
    // the params variable. (You can find the meaning of each of those values by reading the search API
    // docs54.) Then we build the queryUrl by concatenating the apiUrl and the params. Now that we have a
    // queryUrl we can make our request. In this case we are going to use http.get
    // instead of http.request. While http.request can make any kind of request (POST, DELETE< GET,
    // etc.), http.get is a shorthand for GET requests:
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    const queryUrl = `${this.apiUrl}?${params}`;

    return this.http.get(queryUrl)
      .map((response: Response) => {
        return (<any>response.json()).items.map(item => {
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      });

    //  Here we take the return value of http.get and use map to get the Response from the request. From
    // that response we extract the body as an object using .json() and then we iterate over each item
    // and convert it to a SearchResult.
  }
}

// Notice that we’re calling (<any>response.json()).items. What’s going on here? We’re
// telling TypeScript that we’re not interested in doing strict type checking.
// When working with a JSON API, we don’t generally have typing definitions for the API
// responses, and so TypeScript won’t know that the Object returned even has an items key,
// so the compiler will complain.
// We could call response.json()["items"] and then cast that to an Array etc., but in this
// case (and in creating the SearchResult, it’s just cleaner to use an any type, at the expense
// of strict type checking
