import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class BierServiceService {

  constructor(private http: HttpClient) { }

 public getAllBier(): Observable<any> {
    return this.http.get("https://localhost:8080");
  }

}


