import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) { }
  // API KEY

  // token:String = 'AIzaSyAw6UbPwYFsd5kRbGacPxkPqtQ8L_YJelM';
  token:String = 'AIzaSyDUM9wSTWXVcfqah_Pzt3kr602APPY5LLM';
  getYoutubeData(): Observable<any[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    const Headers = { headers: headers };
    return this.httpclient.get<any[]>( `https://www.googleapis.com/youtube/v3/search?key=${this.token}&maxResults=50&type=video&part=snippet&q=john` , Headers);
  }
}
