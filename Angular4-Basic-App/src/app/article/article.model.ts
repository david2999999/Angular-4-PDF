export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes: number){
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  // JavaScript, by default, propagates the click event to all the parent components. Because the
  // click event is propagated to parents, our browser is trying to follow the empty link, which tells the
  // browser to reload.
  // To fix that, we need to make the click event handler to return false. This will ensure the browser
  // won’t try to refresh the page.
  voteUp(): void {
  this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  domain(): string {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (e) {
      return null;
    }
  }
}
