import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders ({'Content-Type': 'application/json'})
};

@Injectable()
export class WijnService {

  private drankenUrl = "/dranken";

  constructor(private http: HttpClient) {
  }

  public getWijn(id: number): Observable<any> {
    return this.http.get("http://localhost:8080/wijnid/" + id);
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

  public addWijnWithFile(wijn, file)  {
    this.addWijn(wijn).subscribe(data =>{
      this.voegPlaatjeToeAanWijn(file, data).subscribe(data => {
        console.log(data)
      }, error3 => {console.log(error3)})
    },error2 => {console.error(error2)});
  }

  public voegPlaatjeToeAanWijn(file, id): Observable<boolean> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<boolean>("http://localhost:8080/wijn/" + id + "/plaatje", formData);
  }
}
