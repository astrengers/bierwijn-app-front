import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class WijnService {

  constructor(private http: HttpClient) {
  }

  public getWijn(id: number): Observable<any> {
    return this.http.get("http://localhost:8080/wijn/" + id);
  }

  public getAllWijn(): Observable<any> {
    return this.http.get("http://localhost:8080/wijn");
  }

  public addWijn(wijn) {
    return this.http.post("http://localhost:8080/wijn", wijn);
  }

  public deleteWijn(wijn) {
    return this.http.delete("http://localhost:8080/wijn/" + wijn);
  }

}
