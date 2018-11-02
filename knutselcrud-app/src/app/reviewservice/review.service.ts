import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders ({'Content-Type': 'application/json'})
};

@Injectable()
export class ReviewService {

  private drankenUrl = "/dranken";

  constructor(private http: HttpClient) {
  }
  // Hier klopt nog helemaal niks van!
  // public getReview(id:number) : Observable<any> {
  //   return this.http.get(this.drankenUrl+"/bierid/"+id);
  // }
  //
  // public getAllReviewsByDrankId(): Observable<any> {
  //   return this.http.get(this.drankenUrl+"/bier");
  // }

  public addReview(review){
    return this.http.post("http://localhost:8080/review", review);
  }

  public deleteReview(review) {
    return this.http.delete("http://localhost:8080/review/{id}" + review);
  }

  public getReview(id: number): Observable<any> {
    return this.http.get("http://localhost:8080/review/" + id);
  }

}
