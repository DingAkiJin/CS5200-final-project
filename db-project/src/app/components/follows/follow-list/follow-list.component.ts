import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../service/shared.service.client";
import {UserService} from "../../../service/user.service.client";

@Component({
  selector: 'app-follow-list',
  templateUrl: './follow-list.component.html',
  styleUrls: ['./follow-list.component.css']
})
export class FollowListComponent implements OnInit {
  user: any;
  userId: String;


  constructor(private sharedService : SharedService, private userService: UserService) { }
  getUser() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }
 unfollowUser(username){
    this.userService.unfollowUser(this.userId, username)
      .subscribe((user) => {
      this.user = user;
      });
 }
  ngOnInit() {
    this.getUser();
    console.log(this.user.follows);
    this.userService.findUserById(this.userId).subscribe((user) => {
      this.user = user;
      console.log(user.follows);
    });
  }

}
