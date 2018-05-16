import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  // article: Article;

  constructor() {
    // article will be populated by input
  }

  ngOnInit() {}

  // JavaScript, by default, propagates the click event to all the parent components. Because the
  // click event is propagated to parents, our browser is trying to follow the empty link, which tells the
  // browser to reload.
  // To fix that, we need to make the click event handler to return false. This will ensure the browser
  // won’t try to refresh the page.
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}
