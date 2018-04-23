import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {UserService} from './user.service.client';
import {environment} from "../../environments/environment";
import { Http, RequestOptions, Response } from '@angular/http';

@Injectable()
export class AdminService implements CanActivate {
  baseUrl = environment.baseUrl;

  constructor(private userService: UserService,
              private http: Http,) {
  }

  canActivate() {
    return this.userService.isAdmin();
  }
}
