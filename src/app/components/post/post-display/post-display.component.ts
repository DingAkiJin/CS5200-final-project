import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../service/post.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {
  post: any;
  pid: any;
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
          },
          (error: any) => {
            console.error(error);
          });
    });
  }

}
