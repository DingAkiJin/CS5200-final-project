import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../service/shared.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  user: any;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  verify: string;
  errorFlag: boolean;
  messageFlag: boolean;
  message: string;
  sub: String;
  pro: String;
  wri: String;
  isWriter: boolean;
  isSub: boolean;
  isPro: boolean;
  postFlag: boolean;
  writerFlag: boolean;
  proFlag: boolean;
  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) {}

  ngOnInit() {
    this.user = this.sharedService.user;
    // if (this.user.roles.indexOf('Admin') > -1) {
    //   this.hidden = true;
    // }
    this.username = this.user['username'];
    this.message = "Successfully Subscribed";
    this.firstname = this.user['firstName'];
    this.lastname = this.user['lastName'];
    this.email = this.user['email'];
    this.userId = this.user['_id'];
    console.log(this.user);
    this.sub = this.subButton();
    this.pro = this.proButton();
    this.wri = this.writerButton();
    if (this.isPro || this.isSub || this.isWriter) {
      this.postFlag = true;
    }
    if (!(this.isWriter && this.isPro)) {
      this.writerFlag = true;
    }
  }

  updateUser() {
    let updatedUser = {
      _id : this.user['_id'],
      username : this.username,
      firstName :this.firstname,
      lastName :  this.lastname,
      email : this.email,

    };

    this.userService.updateUser(updatedUser)
      .subscribe(
        (data: any) => {
          this.router.navigate(['category']);
          // this.userService.findUserById(updatedUser._id)
          //   .subscribe(
          //     (data: any) => {
          //       localStorage.setItem('user', JSON.stringify(data));
          //       this.ngOnInit();
          //     }
          //   )
        },
        (error: any) => this.errorFlag = true
      );
  }

  subButton() {
    const index = this.user.roles.indexOf('Subscriber');
    if (index > -1)  {
      this.isSub = true;
      return 'Unsubscribe';
    } else{
      return 'Subscribe';
    }
  }

  proButton() {
    const index = this.user.roles.indexOf('Professional');
    if (index > -1) {
      this.isPro = true;
      return 'Post';
    } else {
      return 'Be Professional';
    }
  }

  writerButton() {
    const index = this.user.roles.indexOf('Writer');
    if (index > -1) {
      this.isWriter = true;
      return 'Post';
    } else {
      return 'Be Writer';
    }
  }

  changeUserStatus() {
    this.userService.subscribeUser(this.user)
      .subscribe((data: any) => {
         this.ngOnInit();
        },
        (error: any) => this.errorFlag = true
      );
  }

  professional() {
    if (this.isPro) {
      this.router.navigate(['user', 'post', 'new']);
      return;
    }
    this.userService.professional(this.user)
      .subscribe((data: any) => {
          this.router.navigate(['profile']);
        },
        (error: any) => this.errorFlag = true
      );
  }

  writer() {
    if (this.isWriter) {
      this.router.navigate(['user', 'post', 'new']);
      return;
    }
    this.userService.writer(this.user)
      .subscribe((data: any) => {
          this.router.navigate(['profile']);;
        },
        (error: any) => this.errorFlag = true
      );
  }

  // changeUserStatus() {
  //   if (this.user.roles.indexOf('Subscriber') > -1) {
  //     this.userService.unsubscribe(this.user)
  //       .subscribe((data: any) => {
  //         this.router.navigate(['/profile']);
  //       })
  //   } else {
  //     this.userService.subscribe(this.user)
  //       .subscribe((data: any) => {
  //           this.router.navigate(['/profile']);
  //         }, (error: any) => this.errorFlag = true
  //       );
  //   }
  // }


  logOut() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

}
