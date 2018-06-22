import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders ({'Content-Type': 'application/json'})
};

@Injectable()
export class BierService {

  constructor(private http: HttpClient) {
  }

  public getAllBier(): Observable<any> {
    return this.http.get("http://localhost:8080/bier")
  }

  public addBier(bier){
    return this.http.post("http://localhost:8080/bier", bier)
  }

  public deleteBier(bier) {
    return this.http.delete("http://localhost:8080/bier" + "/" + bier);
  }
}

