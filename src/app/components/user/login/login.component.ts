import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service.client";
import {Router} from "@angular/router";
import {SharedService} from "../../../service/shared.service.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: any;
  username: any;
  userId: any;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  //binding 1. one way -> a. () = html to component b. [] => component to HTML 2. two way [()]

  constructor(private sharedService: SharedService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  login(username, password) {
    this.userService.login(username, password)
      .subscribe(
        (user) => {
          console.log('log in' + user);
          this.errorFlag = false;
          this.sharedService.user = user;
          console.log(user);
          this.router.navigate(['category']);
        },
        (error: any) => {
          console.log(this.errorMsg);
          this.errorFlag = true;
        });
  }

  register() {
    this.router.navigate(['/register']);
  }


}
