import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { SearchResult } from './search-result.model';
import { Article } from './article.model';
import { Observable } from 'rxjs/Observable';
import { Cacheable } from 'rebirth-storage';
import { RebirthHttp, RebirthHttpProvider, GET, JSONP } from  'rebirth-http';

@Injectable()
export class ArticleService extends RebirthHttp {

  constructor(protected http: Http, jsonp: Jsonp, protected rebirthHttpProvider: RebirthHttpProvider) {
    super({ http, jsonp, rebirthHttpProvider });
    console.log(rebirthHttpProvider, "rebirthHttpProvider")
  }

  getArticles(pageIndex = 1, pageSize = 5): Observable<SearchResult<Article>> {
    return this.innerGetArticles()
      .map(res => {
        let result = res.result || [];
        let startIndex = (pageIndex - 1 ) * pageSize;
        return {
          pageSize,
          pageIndex,
          total: result.length,
          result: result.slice(startIndex, startIndex + pageSize)
        };
      });
  }

  getArticleByUrl(articleUrl: string): Observable<Article> {
    return this.innerGetArticles()
      .map(res => {
        let result = res.result || [];
        return result.find(item => item.url === articleUrl);
      });
  }

  @Cacheable({ pool: 'articles' })
  @GET('articles.json')
  private  innerGetArticles(): Observable<SearchResult<Article>> {
    return null;
  }

}
