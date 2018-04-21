import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../service/post.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../service/shared.service.client";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  user: any;
  userId: string;
  posts = [];
  answers = [];
  questions = [];
  articles = [];
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute,
              private router: Router, private sharedService: SharedService) { }

  NewPost() {
    this.router.navigate(['/user', 'post', 'new']);
  }
  // deletePost(wid: string) {
  //  this.postService.deletePost(wid);
  // }
  // selectPost(postId: string) {
  //   this.postService.findPostById(this.userId, postId)
  //     .subscribe()
  // }

  MyPosts(pid, categoryName) {
    // this.router.navigate(['/user', 'post', pid]);
    // console.log(categoryName);
    console.log(categoryName);
    this.router.navigate(['/category', categoryName, 'post', pid]);
  }


  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user._id;
    // console.log(this.userId);
    // subscribe to any changes in the route(url); any changes would invoke this fcn
    this.activatedRoute.params.subscribe((params) => {
      this.postService.findPostsByUser(this.userId)
        .subscribe((posts) => {
            this.posts = posts;
          },
          (error: any) => {
            console.error(error);
          });
      this.postService.findAnswersByUser(this.userId)
        .subscribe((answers) => {
        this.answers = answers;
      },
          (error: any) => {
            console.error(error);
          });
      this.postService.findQuestionsByUser(this.userId)
        .subscribe((questions) => {
            this.questions = questions;
          },
          (error: any) => {
            console.error(error);
          });
      this.postService.findArticlesByUser(this.userId)
        .subscribe((articles) => {
        console.log(articles);
            this.articles = articles;
          },
          (error: any) => {
            console.error(error);
          });
    });
  }

}
