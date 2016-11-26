import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { SearchResult } from './search-result.model';
import { Article } from './article.model';
import { Observable } from 'rxjs/Observable';
import { Cacheable } from 'rebirth-storage';
import { RebirthHttp, RebirthHttpProvider, GET } from  'rebirth-http';

@Injectable()
export class ArticleService extends RebirthHttp {

  constructor(protected http: Http, jsonp: Jsonp, protected rebirthHttpProvider: RebirthHttpProvider) {
    super({ http, jsonp, rebirthHttpProvider });
  }

  getArticles(pageIndex = 1, pageSize = 5): Observable<SearchResult<Article>> {
    return this.getAllArticles()
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
    return this.getAllArticles()
      .map(res => {
        let result = res.result || [];
        return result.find(item => item.url === articleUrl);
      });
  }

  @Cacheable({ pool: 'articles' })
  private  getAllArticles(): Observable<SearchResult<Article>> {
    return this.innerGetAllArticles()
      .map(res => {
        let result = res.result || [];
        return {
          result: result.map(item => {
            item.overview = item.overview || item.markdown.substr(0, 100);
            item.image = item.image || (item.html.match(/src="?'?([^> <"']+)"?'?/) || [])[1];

            return item;
          })
        };
      });
  }

  @GET('articles.json')
  private  innerGetAllArticles(): Observable<SearchResult<Article>> {
    return null;
  }

}
