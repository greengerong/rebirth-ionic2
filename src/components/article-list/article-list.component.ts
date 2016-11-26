import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { ArticleService, SearchResult, Article } from '../../core';
import { environment } from '../../environments/environment';
import { NavController } from 'ionic-angular';
import { EventEmitter } from '@angular/common/src/facade/async';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.html'
})
export class ArticleListComponent implements OnInit,OnDestroy {

  private article: SearchResult<Article>;

  @Output()
  articleClicked = new EventEmitter();

  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {
    this.pageChange(1);
  }

  ngOnDestroy(): void {
    this.articleClicked.complete();
  }

  gotoPage(url) {
    console.log("article-list", url);
    this.articleClicked.emit(url);
  }

  pageChange(pageIndex) {
    this.articleService.getArticles(pageIndex, environment.article.pageSize)
      .subscribe(result => {
        this.article = result;
      }, (e) => console.log(e, 'ArticleListComponent error'));
  }

}
