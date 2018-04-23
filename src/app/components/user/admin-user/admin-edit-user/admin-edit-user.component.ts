import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../service/user.service.client';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  userId: string;
  user: any;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;

  updateUser() {
    const updatedUser = {
      _id: this.userId,
      username: this.username,
      firstName: this.firstname,
      lastName: this.lastname,
      email: this.email,

    };
    this.userService.updateUser(updatedUser)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/admin/user']);
        },
      );}
  ngOnInit(){
  this.activatedRoute.params.subscribe((params) =>
    this.userId = params['uid'],
  )
  }

}
