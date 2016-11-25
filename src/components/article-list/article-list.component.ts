import { Component, OnInit, ElementRef } from '@angular/core';
import { ArticleService, SearchResult, Article } from '../../core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.html'
})
export class ArticleListComponent implements OnInit {
  private article: SearchResult<Article>;

  constructor(private articleService: ArticleService, private elmRef: ElementRef) {

  }

  ngOnInit() {
    this.pageChange(1);
  }

  pageChange(pageIndex) {
    this.articleService.getArticles(pageIndex, environment.article.pageSize)
      .subscribe(result => {
        this.article = result;
      }, (e) => console.log(e, 'ArticleListComponent error'));
  }

}
