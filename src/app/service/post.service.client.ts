import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class PostService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) {}

  createPost(userId: string, post) {
    const url = this.baseUrl + '/api/user/' + userId + '/post';
    // console.log('client side create post: ', url);
    return this.http.post(url, post)
      .map((response: Response) => {
        return response.json();
      });
    // post._id = String(Math.random() * 1000 + 1);
    // post.pageId = pageId;
    // console.log(post._id);
    // this.posts.push(post);
    // return post;post
  }
  findPostsByUser(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId + '/post';
    console.log("client");
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
    // const w = [];
    // for (let x = 0; x < this.posts.length; x++) {
    //   if (this.posts[x].pageId === pageId) {
    //     w.push(this.posts[x]);
    //   }
    // }
    // return w;
  }

  findAnswersByUser(userId) {
    const url = this.baseUrl + '/api/user/' + userId + '/answer';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findArticlesByUser(userId) {
      const url = this.baseUrl + '/api/user/' + userId + '/article';
      return this.http.get(url)
        .map((response: Response) => {
          return response.json();
        });
  }

  findQuestionsByUser(userId) {
    const url = this.baseUrl + '/api/user/' + userId + '/question';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findPostById(postId: string) {
    const url = this.baseUrl + '/api/post/' + postId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
    // for (let x = 0; x < this.posts.length; x++) {
    //   if (this.posts[x]._id === postId) {
    //     return this.posts[x];
    //   }
    // }
  }
  updatePost(postId: string, post) {
    const url = this.baseUrl + '/api/post/' + postId;
    console.log('updatePost from client side', post);
    return this.http.put(url, post)
      .map((response: Response) => {
        console.log('updateWidget from client side');
        return response.json();
      });
    // for (let x = 0; x < this.posts.length; x++) {
    //   if (this.posts[x]._id === postId) {
    //     this.posts[x] = post;
    //     break;
    //   }
    // }
  }
  deletePost(postId: string) {
    const url = this.baseUrl +  '/api/post/' + postId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
    // for (let x = 0; x < this.posts.length; x++) {
    //   if (this.posts[x]._id === postId) {
    //     this.posts.splice(x, 1);
    //     break;
    //   }
    // }
  }

  findArticlesByCategory(category: string) {
    const url = this.baseUrl + '/api/post/category/' + category;
    console.log(url);
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findAllPosts() {
    const url = this.baseUrl + '/api/post';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

}



