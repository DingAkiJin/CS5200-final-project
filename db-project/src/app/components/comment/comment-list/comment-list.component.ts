import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../service/shared.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../../service/comment.service.client";
import {UserService} from "../../../service/user.service.client";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  // user: any;
  // userId: string;
  // userName: string;
  post: any;
  postId: string;
  comments = [];
  userName: string;
  numComments: number;

  constructor(private commentService: CommentService,
              private sharedService: SharedService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    // this.user = this.sharedService.user;
    // this.userId = this.user.userId;
    // this.userName = this.user.username;

    this.activatedRoute.params.subscribe((params: any) => {
      this.postId = params['pid'];

      this.commentService.findCommentsByPostId(this.postId).subscribe((comments) => {
        this.comments = comments;
        this.numComments = comments.length;
        console.log(comments);
      });
    });
  }

}
