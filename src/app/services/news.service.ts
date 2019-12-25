import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NewsModel } from '../models/news.model';
import { NewsResponseModel } from '../models/news-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url = environment.baseUrl + 'news';

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(this.url);
  }

  deleteNews(id): Observable<NewsResponseModel> {
    return this.http.delete<NewsResponseModel>(this.url + `/${id}`);
  }

  updateNews(id, changes): Observable<NewsResponseModel> {
    return this.http.put<NewsResponseModel>(this.url + `/${id}`, changes);
  }

  addNews(news: NewsModel): Observable<NewsResponseModel> {
    return this.http.post<NewsResponseModel>(this.url, news);
  }

}
