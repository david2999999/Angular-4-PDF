import {YoutubeSearchService} from './youtube-search.service';

const YOUTUBE_API_KEY = 'AIzaSyDXZ4kwxSqz4-CZ0gKVdH9ooTKfvoB7vvY';
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

export const youTubeSearchInjectables: Array<any> = [
  {provide: YoutubeSearchService, useClass: YoutubeSearchService},
  {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];
