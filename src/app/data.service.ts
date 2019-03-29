import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Show} from './models/Show';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getShows(query): Observable<any[]> {
    return this.http.get<any[]>('http://api.tvmaze.com/search/shows?q=' + query);
  }
  getSeasons(id): Observable<any[]> {
    return this.http.get<any[]>('http://api.tvmaze.com/shows/' + id + '/seasons');
  }
  getEpisodes(id: number): Observable<any[]> {
    return this.http.get<any[]>('http://api.tvmaze.com/seasons/' + id + '/episodes');
  }
}



