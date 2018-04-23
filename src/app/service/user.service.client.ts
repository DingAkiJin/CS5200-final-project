// server expects certain requests, client generates requests for it.
import {Injectable} from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service.client';

@Injectable()

export class UserService {
  baseUrl = environment.baseUrl;
  users = [
    {_id:'123', username: 'alice', password: 'alice',firstName: 'Alice',lastName:'Wonder'}];


    constructor(private sharedService: SharedService,
                private http: Http,
                private router: Router,
               ) {}
  options: RequestOptions = new RequestOptions();

  followUser(userId, follows) {
    const url = this.baseUrl + '/api/project/user/follows/' + userId;
    return this.http.put(url, follows)
      .map((response: Response) => {
        return response.json();
      });
  }

  unfollowUser(userId, username){
    const url = this.baseUrl + '/api/project/user/' + userId+ '/unfollows/' +username;
    return this.http.put(url, {})
      .map((response: Response) => {
        return response.json();
      });
  }

  loggedIn() {
    const url = this.baseUrl + '/api/loggedIn/';
    this.options.withCredentials = true;
    return this.http.post(url, {}, this.options)
      .map ((response: Response) => {
        const user = response.json();
        if (user !== 0) {
          this.sharedService.user = user;
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      });
  }

  login(username, password) {
    //console.log(username, password);
    // const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    // return this.http.get(url)
    //   .map((response: Response) => {
    //     return response.json();
    //   })
    const url = this.baseUrl + '/api/login';
    console.log(url);
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map ((response: Response) => {
        return response.json();
      });
  }

  register(username, password) {
    const url = this.baseUrl + '/api/register';
    const credentials = {
      username: username,
      password: password
    };
    return this.http.post(url, credentials)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByUsername(username) {
    // console.log(username);
    const url = this.baseUrl + '/api/user?username=' + username;
    console.log(url);
    return this.http.get(url)
      .map((response: Response) => {
        // console.log(response.json());
        return response.json();
      })
  }

  findUserById(userId) {
    const url = this.baseUrl + '/api/user/' + userId;
    // console.log(url);
    return this.http.get(url)
      .map((response: Response) => {
        // console.log(response.json());
        return response.json();
      });
  }

  updateUser(user) {
    const url = this.baseUrl + '/api/updateUser/' + user._id;
    this.options.withCredentials = true;
    return this.http.put(url, user, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  subscribeUser(user) {
    const url = this.baseUrl + '/api/updateUser/' + user._id;
    console.log(url);
    var index = user.roles.indexOf('Subscriber', 0);
    // if a subscriber, unsubscribe the user, otherwise subscribe the user
    if (index > -1) {
      var c_index = user.choices.indexOf('Question', 0);
      user.choices.splice(c_index, 1);
      user.roles.splice(index, 1);
    } else {
      user.choices.push("Question");
      user.roles.push('Subscriber');
    }
    // user.role = user.role == "Subscriber" ? "User" : "Subscriber";
    this.options.withCredentials = true;
    return this.http.put(url, user, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  subscribe(user) {
    //var userId = user._id;
    const url = this.baseUrl + '/api/subscribe';
    this.options.withCredentials = true;
    return this.http.put(url, user, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  unsubscribe(user) {
    //var userId = user._id;
    const url = this.baseUrl + '/api/unsubscribe';
    this.options.withCredentials = true;
    return this.http.put(url, user, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  professional(user) {
    const url = this.baseUrl + '/api/updateUser/' + user._id;
    var index = user.roles.indexOf('Professional', 0);
    // if a subscriber, unsubscribe the user, otherwise subscribe the user
    if (index > -1) {
      var c_index = user.choices.indexOf('Answer', 0);
      user.choices.splice(c_index, 1);
      user.roles.splice(index, 1);
    } else {
      user.choices.push("Answer");
      user.roles.push('Professional');
    }
    // user.role = user.role == "Subscriber" ? "User" : "Subscriber";
    this.options.withCredentials = true;
    return this.http.put(url, user, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  writer(user) {
    const url = this.baseUrl + '/api/updateUser/' + user._id;
    var index = user.roles.indexOf('Writer', 0);
    // if a subscriber, unsubscribe the user, otherwise subscribe the user
    if (index > -1) {
      var c_index = user.choices.indexOf('Article', 0);
      user.choices.splice(c_index, 1);
      user.roles.splice(index, 1);
    } else {
      user.choices.push("Article");
      user.roles.push('Writer');
    }
    // user.role = user.role == "Subscriber" ? "User" : "Subscriber";
    this.options.withCredentials = true;
    return this.http.put(url, user, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  logout() {
    const url = this.baseUrl + '/api/logout';
    this.options.withCredentials = true;
    return this.http.post(url, {}, this.options)
      .map ((response: Response) => {
        return response;
      });
  }

  findAllUsers() {
    const url = this.baseUrl + '/api/admin/user';
    this.options.withCredentials = true;
    return this.http.get(url, this.options)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteUser(userId) {
    const url = this.baseUrl + '/api/admin/user/' + userId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  isAdmin() {
    const url = this.baseUrl + '/api/admin/isAdmin';
    this.options.withCredentials = true;
    return this.http.get(url, this.options)
      .map((res: Response) => {
        const user = res.json();
        if (user !== 0) {
          this.sharedService.user = user; return true;
        } else {
          this.router.navigate(['/login']); return false;
        }
      });
  }
  deleteFollow(followId, userId){
    const url = this.baseUrl + '/api/user/' + userId + '/follow/' + followId;
    return this.http.delete(url)
      .map((res: Response) => {
      return res.json();
    });
  }

}



