import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../../service/comment.service.client';
import {SharedService} from '../../../service/shared.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.css']
})
export class CommentNewComponent implements OnInit {

  post: any;
  user: any;
  postId: string;
  comments = [];
  commentText: string;
  userName: string;
  category: string;

  constructor(private commentService: CommentService,
              private sharedService: SharedService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userName = this.user.username;
    this.activatedRoute.params.subscribe((params: any) => {
      this.postId = params['pid'];
      this.category = params['categoryName']
      console.log(this.category);

      this.commentService.findCommentsByPostId(this.postId).subscribe((comments) => {
        this.comments = comments;
        console.log(this.postId);
      });
    });
  }

  postComment() {
    const comment = {'text': this.commentText, '_user': this.user, 'userName': this.userName};
    console.log(this.userName);
    console.log(this.postId);

    this.commentService.createComment(this.postId, comment).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['category', this.category, 'post',  this.postId]);
    });
  }

}
