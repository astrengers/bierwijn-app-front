import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {promise} from "selenium-webdriver";
import {any} from "codelyzer/util/function";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BierServiceService {

  constructor(private http: HttpClient) { }

 public getAllBier(): Observable<any> {
    return this.http.get("localhost:8080");
  }

}


