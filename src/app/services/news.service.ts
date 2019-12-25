import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url = environment.baseUrl + 'news';

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(this.url + '&limit=20');
  }

  deleteNews(id) {
    return this.http.delete(this.url + `/${id}`);
  }

  updateNews(id, changes) {
    return this.http.put(this.url + `/${id}`, changes);
  }

}
