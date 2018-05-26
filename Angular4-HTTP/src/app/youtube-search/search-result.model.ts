// search result is a data structure that holds an individual
// record from a youtube video search
export class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;

  constructor(obj?: any) {
    this.id = obj && obj.id                     || null;
    this.title = obj && obj.title               || null;
    this.description = obj && obj.description   || null;
    this.thumbnailUrl = obj && obj.thumbnailUrl || null;
    this.videoUrl = obj && obj.videoUrl         || `https://www.youtube.com/watch?v=${this.id}`;
  }
}

// This pattern of taking an obj?: any lets us simulate keyword arguments. The idea is that we can
// create a new SearchResult and just pass in an object containing the keys we want to specify.
// The only thing to point out here is that we’re constructing the videoUrl using a hard-coded URL
// format. You’re welcome to change this to a function which takes more arguments, or use the video
// id directly in your view to build this URL if you need to.
