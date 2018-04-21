import { Component, OnInit } from '@angular/core';
import {NewsServiceClient} from '../../../service/news.service.client';
import {SharedService} from '../../../service/shared.service.client';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  posts = [];
  title: String;
  result: Object;
  userName: string;
  user: any;

  constructor(private newsService: NewsServiceClient, private sharedService: SharedService) { }


  searchNewsByCategory(title: String) {
    this.newsService.searchNewsByCategory(title)
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
    this.user = this.sharedService.user;
    this.userName = this.user.username;
    this.newsService.alltopnews()
      .subscribe((result) => {
        this.result = result;
        console.log(result);
      });
  }

}
