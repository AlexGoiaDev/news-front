import { Component, OnInit } from '@angular/core';
import { NewsModel } from '../models/news.model';
import { NewsService } from '../services/news.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NewsResponseModel } from '../models/news-response.model';
import { NewsResponsePaginationModel } from '../models/news-response-pagination.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  archivedNews: NewsModel[];
  news: NewsModel[];

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getAllNews();
  }


  getAllNews() {
    this.newsService.getNews().pipe(take(1)).subscribe((res: NewsResponsePaginationModel) => {
      if (res && res.data && res.data.docs && res.data.docs.length > 0) {
        this.archivedNews = res.data.docs.filter(doc => doc.archiveDate !== undefined);
        this.news = res.data.docs.filter(doc => doc.archiveDate === undefined);
      }
    });
  }

  deleteNew(id) {
    this.newsService.deleteNews(id).pipe(take(1)).subscribe(
      (res: NewsResponseModel) => {
        if (res && res.data) {
          this.archivedNews = this.archivedNews.filter(doc => doc._id !== id);
        }
      });
  }

  archiveNews(id) {
    this.newsService.updateNews(
      id,
      { archiveDate: new Date() }
    ).pipe(take(1)).subscribe((res: NewsResponseModel) => {
      if (res && res.data) {
        const newsToMove = this.news.find(doc => doc._id === id);
        if (newsToMove) {
          this.news = this.news.filter(doc => doc._id !== id);
          this.archivedNews.unshift(res.data);
        }
      }
    });
  }

  addNews() {
    this.router.navigate(['/add']);
  }

}
