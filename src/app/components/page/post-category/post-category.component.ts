import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from '@angular/router';
import {PostService} from '../../../service/post.service.client';
import {SharedService} from "../../../service/shared.service.client";
import {UserService} from "../../../service/user.service.client";


@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.css']
})
export class PostCategoryComponent implements OnInit {

  posts = [];
  categoryName: string;
  userId: string;
  username: string;
  user: any;
  loggedinuser: any;

  loggedname: string;
  constructor(private sharedService: SharedService,
              private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }


  ngOnInit() {
    this.user = this.sharedService.user;
    this.activatedRoute.params.subscribe((params: any) => {
      this.categoryName = params['categoryName'];
      // console.log(this.categoryName);
      this.postService.findArticlesByCategory(this.categoryName)
        .subscribe((posts) => {
          console.log(posts);
          this.posts = posts;
        });
    });
  }

  followUser(userId)  {

    this.userService.findUserById(userId)
      .subscribe((user) => {
      // this.username = user.username;
        const follows = {
          userId: userId,
          username: user.username
        };
        this.userService.findUserByUsername(this.loggedname)
          .subscribe((response) => {
            const userFollows = response.follows;
            for ( const i in userFollows) {
              if (userFollows[i].username = this.username) {
                alert('Yor are already following this user!');
                return;
              }
            }
          });
        this.userService.followUser(this.loggedinuser._id, follows)
          .subscribe(
            (status) => {
              this.user = status;
            }
          );
      });
  }

  GoTo(pid) {
    console.log(pid);
    // category/:categoryName/post/:pid
    this.router.navigate(['/share', 'post', pid]);
  }

}
