import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders ({'Content-Type': 'application/json'})
};

@Injectable()
export class BierService {

  private drankenUrl = "/dranken";

  private wijzigId:number;

  constructor(private http: HttpClient) {
  }

  public setWijzigId(id:number){
    this.wijzigId = id;
  }

  public getWijzigId(){
    return this.wijzigId ;
  }

  public getBier(id:number) : Observable<any> {
    return this.http.get(this.drankenUrl+"/bierid/"+id);
  }

  public getAllBier(): Observable<any> {
    return this.http.get(this.drankenUrl+"/bier");
  }

  public addBier(bier): Observable<number>{
    return this.http.post<number>(this.drankenUrl+"/bier", bier);
  }

  public wijzigBier(bier){
    return this.http.put("http://localhost:8080/updatebier", bier);
  }

  public addBierWithFile(bier, file)  {
    this.addBier(bier).subscribe(data =>{
        this.voegPlaatjeToeAanBier(file, data).subscribe(data => {
          console.log(data)
        }, error3 => {console.log(error3)})
      },error2 => {console.error(error2)});
  }

  public voegPlaatjeToeAanBier(file, id): Observable<boolean> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<boolean>("http://localhost:8080/bier/" + id + "/plaatje", formData);
  }

  public deleteBier(bier) {
    return this.http.delete("http://localhost:8080/bier/" + bier);
  }
}
