import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../service/post.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../service/shared.service.client";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  userId: string;
  postId: string;
  post: any;
  postName: string;
  text: string;
  error: string;
  flag = false;
  alert: string;
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute,
              private router: Router, private sharedService: SharedService) { }


  MyPost(pid) {
    this.router.navigate(['/user', 'post', pid]);
  }

  ngOnInit() {
    this.error = 'Enter the name of your post';
    this.alert = '* Enter the post name';
    this.userId = this.sharedService.user._id;
    this.activatedRoute.params.subscribe((params: any) => {
        this.postId = params['pid'];
        this.postService.findPostById(this.postId)
          .subscribe((post) => {
            this.post = post;
            this.postName = post.title;
            this.text = post.text;
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
    this.post.title = this.postName;
    this.postService.updatePost(this.postId, this.post)
      .subscribe((data: any) => {
        // this.posts = posts;
        // console.log('update image', this.post);
        this.router.navigate(['user', 'post', this.postId]);
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
    this.router.navigate(['user', 'post', this.postId]);
  }

}
