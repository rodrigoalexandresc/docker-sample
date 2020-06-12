import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getSeason() : Observable<any> {
    return this.httpClient.get("http://192.168.99.100:6002/Season");
    //return this.httpClient.get("http://localhost:5000/Season");
  }
}
