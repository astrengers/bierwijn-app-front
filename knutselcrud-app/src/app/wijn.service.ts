import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class WijnService {

  constructor(private http: HttpClient) { }

  public getAllWijn(): Observable<any>{
    return this.http.get("http://localhost:8080/wijn")
  }

}
