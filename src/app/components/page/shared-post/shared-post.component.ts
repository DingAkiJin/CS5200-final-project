import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../service/post.service.client";

@Component({
  selector: 'app-shared-post',
  templateUrl: './shared-post.component.html',
  styleUrls: ['./shared-post.component.css']
})
export class SharedPostComponent implements OnInit {

  post: any;
  pid: any;
  category: string;
  postAuthor: string;
  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      // js map fcn stored the corresponding uid under name 'uid'

      this.pid = params['pid'];
      this.postService.findPostById(this.pid)
        .subscribe((post) => {
            console.log(post);
            this.post = post;
            this.category = post.category;
            this.postAuthor = post.author;
          },
          (error: any) => {
            console.error(error);
          });
    });
  }

  postComment() {
    this.router.navigate(['category', this.category, 'post',  this.pid, 'comment', 'new']);
  }

}
