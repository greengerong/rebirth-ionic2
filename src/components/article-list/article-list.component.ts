import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { ArticleService, SearchResult, Article } from '../../core';
import { environment } from '../../environments/environment';
import { EventEmitter } from '@angular/common/src/facade/async';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.html',
})
export class ArticleListComponent implements OnInit,OnDestroy {

  pageIndex = 1;
  article: SearchResult<Article>;

  @Output()
  articleClicked = new EventEmitter();

  constructor(private articleService: ArticleService, private toastCtrl: ToastController) {

  }


  ngOnInit() {
    this.pageChange(this.pageIndex);
  }

  ngOnDestroy(): void {
    this.articleClicked.complete();
  }

  gotoPage(url) {
    this.articleClicked.emit(url);
  }

  loadMore(infiniteScroll) {
    this.pageIndex += 1;
    this.pageChange(this.pageIndex, () => infiniteScroll.complete());
  }

  pageChange(pageIndex, done?: () => void) {
    this.articleService.getArticles(pageIndex, environment.article.pageSize)
      .subscribe(result => {
        if (!this.article) {
          this.article = result;
          return;
        }

        this.article.pageIndex = result.pageIndex;
        this.article.total = result.total;
        this.article.result.push(...result.result);

        setTimeout(() => {
          done && done();
          this.toastCtrl.create({
            message: `第${pageIndex}页数据加载完成`,
            duration: 1000
          }).present();
        }, 500);
      }, (e) => console.log(e, 'ArticleListComponent error'));
  }

}
