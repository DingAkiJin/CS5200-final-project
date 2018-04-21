import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../service/shared.service.client";
import {UserService} from "../../../service/user.service.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  verify: string;
  disabledFlag: Boolean;
  //nvUsername: Boolean;
  nvPassword: Boolean;
  error: any;
  constructor(private sharedService: SharedService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register(username, password, verify) {
    //console.log(username, " ", password);
    if (!(password === verify)) {
      this.disabledFlag = true;
      this.nvPassword = true;
      this.error = 'Passwords do not match!';
    }else {
      this.userService.register(username, password)
        .subscribe(
          (data: any) => {
            this.sharedService.user = data;
            this.router.navigate(['/login']);
          },
          (error: any) => {
            console.log(error);
            this.disabledFlag = true;
            this.error = error._body;
          }
        );
    }
  }
}
