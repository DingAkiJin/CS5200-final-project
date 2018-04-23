import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../../service/post.service.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {
  posts=[];
  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.postService
      .findAllPosts()
      .subscribe((posts) => {
        this.posts = posts;
      }, (error) => {
        console.log(error);
      });
  }

  goTo() {
    this.router.navigate(['admin', 'user']);
  }

  deletePost(pid) {
    this.postService.deletePost(pid)
      .subscribe((status) => {
          this.router.navigate(['admin', 'post']);
        },
        (error: any) => console.log(error));
  }

}
