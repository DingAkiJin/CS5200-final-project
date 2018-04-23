import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()

export class SharedService {
  user: any; // track user through out components
  constructor(private http: Http) {}
}
