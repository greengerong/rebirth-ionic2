import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Article, ArticleService } from '../../core';

@Component({
  selector: 'page-article-detail',
  templateUrl: 'article-detail.html'
})
export class ArticleDetailPage implements OnInit {
  article: Article;

  constructor(private navCtrl: NavController, private navParams: NavParams, private articleService: ArticleService) {

  }

  ngOnInit(): void {
    this.articleService.getArticleByUrl(this.navParams.get('id'))
      .subscribe(article => this.article = article);
  }
}
