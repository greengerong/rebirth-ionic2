import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ArticleDetailPage } from '../article-detail/article-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoPage(article) {
    this.navCtrl.push(ArticleDetailPage, {
      id: article
    }, { animate: true });
  }

}
