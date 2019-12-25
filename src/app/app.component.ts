import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NewsModel } from './models/news.model';
import { NewsService } from './services/news.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'front';
  archivedNews: NewsModel[];
  news: NewsModel[];

  constructor(private newsService: NewsService) {

  }

  ngOnInit() {
    this.getAllNews();
  }



  getAllNews() {
    // TODO: AÑADIR MODELADO
    this.newsService.getNews().pipe(take(1)).subscribe((res: any) => {
      if (res && res.data && res.data.docs && res.data.docs.length > 0) {
        this.archivedNews = res.data.docs.filter(doc => doc.archiveDate !== undefined);
        this.news = res.data.docs.filter(doc => doc.archiveDate === undefined);
      }
    });
  }

  deleteNew(id) {
    this.newsService.deleteNews(id).pipe(take(1)).subscribe((res: any) => {
      if (res && res.data) {
        this.archivedNews = this.archivedNews.filter(doc => doc._id !== id);
      }
    });
  }

  archiveNews(id) {
    this.newsService.updateNews(id, { archiveDate: new Date() }).pipe(take(1)).subscribe((res: any) => {
      if (res && res.data) {
        const newsToMove = this.news.find(doc => doc._id === id);
        if (newsToMove) {
          this.news = this.news.filter(doc => doc._id !== id);
          this.archivedNews.unshift(res.data);
        }
      }
    });
  }

}
