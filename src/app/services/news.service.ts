import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NewsModel } from '../models/news.model';
import { NewsResponseModel } from '../models/news-response.model';
import { Observable } from 'rxjs';
import { NewsResponsePaginationModel } from '../models/news-response-pagination.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url = environment.baseUrl + 'news';

  constructor(private http: HttpClient) { }

  getNews(): Observable<NewsResponsePaginationModel> {
    return this.http.get<NewsResponsePaginationModel>(this.url);
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
