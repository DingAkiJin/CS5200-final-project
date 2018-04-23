import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class CommentService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) {}

  api = {
    'createComment' : this.createComment,
    'findCommentsByPostId' : this.findCommentsByPostId
  };

  createComment(postId: string, comment) {
    const url = this.baseUrl + '/api/post/' + postId + '/comment';
    console.log(comment.userName);
    return this.http.post(url, comment)
      .map((response: Response) => {
        return response.json();
      });
  }

  findCommentsByPostId(postId: string) {
    const url = this.baseUrl + '/api/post/' + postId + '/comment';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  // deleteComment(commentId: string) {
  //   const url = this.baseUrl +  '/api/post/' + postId;
  //   return this.http.delete(url)
  //     .map((response: Response) => {
  //       return response.json();
  //     });
  //   // for (let x = 0; x < this.posts.length; x++) {
  //   //   if (this.posts[x]._id === postId) {
  //   //     this.posts.splice(x, 1);
  //   //     break;
  //   //   }
  //   // }
  // }

}



