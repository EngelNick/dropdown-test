import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ApiService {
  private url = 'https://api.themoviedb.org/3/movie/popular?api_key=1e8d147c97b613e6a21a17de7233bbb5&language=en-US&page=1';

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<any> {
    return this.http.get(this.url);
  }

}
