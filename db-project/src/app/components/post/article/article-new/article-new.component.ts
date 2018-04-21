import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../../service/post.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../../service/shared.service.client";

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {
  userId: string;
  postId: string;
  webId: string;
  post: any;
  postName: string;
  posts = [];
  // baseUrl: string;
  text: string;
  error: string;
  flag = false;
  alert: string;
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute,
              private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    // this.baseUrl = environment.baseUrl;
    this.error = 'Enter the name of the Post';
    this.alert = '* Enter the name of the Post';
    this.userId = this.sharedService.user._id;
    this.activatedRoute.params.subscribe((params: any) => {
        this.postId = params['pid'];
        this.postService.findPostById(this.postId)
          .subscribe((posts) => {
            this.posts = posts;
          });
        this.postService.findPostById(this.postId)
          .subscribe((post) => {
            // console.log('found post by id', post);
            this.post = post;
            this.postName = post.name;
          });
      }
    );
  }

  UpdatePost() {
    if (!this.postName) {
      this.flag = true;
      return;
    }
    this.post.text = this.text;
    this.post.name = this.postName;
    this.postService.updatePost(this.postId, this.post)
      .subscribe((data: any) => {
        // this.posts = posts;
        // console.log('update image', this.post);
        this.router.navigate(['user', 'post']);
      });
  }

  Delete() {
    this.postService.deletePost(this.postId)
      .subscribe((data: any) => {
        // this.posts = posts;
        this.router.navigate(['user', 'post']);
      });
  }
  Cancel() {
    this.router.navigate(['user', 'post']);
  }

}
