import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

/*
  Generated class for the NoticiasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const baseURL = "https://news.ual.es/wp-json/wp/v2";

@Injectable()
export class NoticiasProvider {

  constructor(public http: HttpClient) {
    
  }

  getNoticias(): Observable<any> {
    return this.http.get(`${baseURL}/posts/`);
  }

  getNoticia(id: number): Observable<any> {
    return this.http.get(`${baseURL}/posts/${id}`);
  }

}
