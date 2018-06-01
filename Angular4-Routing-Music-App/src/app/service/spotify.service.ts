import {Http} from '@angular/http';

export class SpotifyService {
  constructor(public http: Http) {}

  searchTrack(query: string) {
    const params: string = [
      `q=${query}`,
      `type=track`
    ].join('&');

    const queryURL = `https://api.spotify.com/v1/search?${params}`;
    return this.http.request(queryURL).map(res => res.json());
  }

}

// This code performs an HTTP GET request to the URL https://api.spotify.com/v1/search67, passing our
// query as the search term and type hardcoded to track.
// This http call returns an Observable. We are going one step further and using the RxJS function
// map to transform the result we would get (which is an http module’s Response object) and parsing
// it as JSON, resulting on an object.

// Any function that calls searchTrack will then have to use the Observable API to subscribe to the
// response like this:
// 1 service
// 2 .searchTrack('query')
// 3 .subscribe((res: any) => console.log('Got object', res))

// Next we call subscribe on this Observable which allows us to listen in on any data that is coming through.
// In subscribing we use three distinctive callbacks: the first one is invoked when receiving new values,
// the second for any errors that arise and the last
// represents the function to be invoked when the sequence of incoming data is complete and successful.
