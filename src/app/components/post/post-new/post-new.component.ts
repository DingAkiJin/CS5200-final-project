import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../service/post.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../service/shared.service.client";

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {

  user: any;
  userId: string;
  postId: string;
  post: any;
  postName: string;
  posts = [];
  // baseUrl: string;
  text: string;
  error: string;
  flag = false;
  alert: string;
  choices = [];
  choice: any;
  category = 'General';
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute,
              private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    // this.baseUrl = environment.baseUrl;
    this.error = 'Please fill in all required fields';
    this.alert = '* Please fill in all required fields';
    this.user = this.sharedService.user;
    this.userId = this.user._id;
    this.choices = this.user.choices;
    console.log(this.choices);
  }

  CreatePost() {
    if (!this.postName || !this.choice) {
      this.flag = true;
      return;
    }
    console.log(this.text);
    this.post = {
      author: this.user.username,
      text: this.text,
      title: this.postName,
      type: this.choice,
    };
    this.postService.createPost(this.userId, this.post)
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
