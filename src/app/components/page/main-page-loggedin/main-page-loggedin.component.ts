import { Component, OnInit } from '@angular/core';
import {NewsServiceClient} from '../../../service/news.service.client';

@Component({
  selector: 'app-main-page-loggedin',
  templateUrl: './main-page-loggedin.component.html',
  styleUrls: ['./main-page-loggedin.component.css']
})
export class MainPageLoggedinComponent implements OnInit {

  title: String;
  result: Object;
  constructor(private newsService: NewsServiceClient) { }
  searchNews(title: String) {
    this.newsService.searchNewsByTitle(title)
      .subscribe((result) => {
        this.result = result;
        console.log(result);
      });
  }
  alltopnews() {
    this.newsService.alltopnews()
      .subscribe((result) => {
        this.result = result;
        console.log(result);
      });
  }
  ngOnInit() {
    this.newsService.alltopnews()
      .subscribe((result) => {
        this.result = result;
        console.log(result);
      });
  }

}
