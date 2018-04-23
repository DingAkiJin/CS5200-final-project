import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service.client";
import {AdminService} from "../../../service/admin.service.client";
import {Router} from "@angular/router";
import {PostService} from "../../../service/post.service.client";

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  users=[];
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.userService
      .findAllUsers()
      .subscribe((users) => {
        this.users = users;
      }, (error) => {
        console.log(error);
      })
  }

  goTo() {
    this.router.navigate(['admin', 'post']);
  }


  deleteUser(uid) {
    this.userService.deleteUser(uid)
      .subscribe((status) => {
        this.router.navigate(['admin', 'user']);
      },
        (error: any) => console.log(error));
    }

}
