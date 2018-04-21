import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class NewsServiceClient {
  searchNewsByCategory(title: String){
    const url = 'https://newsapi.org/v2/everything?q=' + title + '&apiKey=9a540554d49b44e3ad4458f8bae3e747';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  searchNewsByTitle(title: String) {
    const url = 'https://newsapi.org/v2/top-headlines?sources=' + title + '&apiKey=9a540554d49b44e3ad4458f8bae3e747';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  alltopnews() {
    const url = 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=9a540554d49b44e3ad4458f8bae3e747';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  constructor (private http: Http) {}

}
