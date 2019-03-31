import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURL = 'http://api.tvmaze.com/';
  constructor(private http: HttpClient) { }

  getShows(query): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL + 'search/shows?q=' + query);
  }
  getSeasons(id): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL + 'shows/' + id + '/seasons');
  }
  getEpisodes(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL + 'seasons/' + id + '/episodes');
  }
  getData(url): Observable<any> {
    return this.http.get<any>(url);
  }
}



