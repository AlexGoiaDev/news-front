import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NewsService } from '../services/news.service';
import { NewsModel } from '../models/news.model';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NewsResponseModel } from '../models/news-response.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newsForm: FormGroup;
  success: boolean;

  constructor(
    private fb: FormBuilder,
    private newsService: NewsService,
    private router: Router
  ) {
    this.newsForm = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
      description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
      content: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
      author: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
    });
  }

  ngOnInit() {
  }

  addNews() {
    if (this.newsForm.valid) {
      const newsToSend: NewsModel = {
        title: this.newsForm.get('title').value,
        description: this.newsForm.get('description').value,
        date: new Date(),
        author: this.newsForm.get('author').value,
        content: this.newsForm.get('content').value
      };
      this.newsService.addNews(newsToSend).pipe(take(1)).subscribe((res: NewsResponseModel) => {
        if (res && res.status === 200) {
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 1500);
        }
      });
    }
  }

  goToList() {
    this.router.navigate(['']);
  }

}
