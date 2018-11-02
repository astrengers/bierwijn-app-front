import {Component, OnInit} from "@angular/core";

import {Bier} from "./bier.model";
import {Land} from "../landenlijst/land.model";
import {BierService} from "../bierservice/bier.service";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {BIERSOORTEN} from "./biersoorten.model";
import {LandenlijstService} from "../landenlijst/landenlijst.service";

@Component({
  templateUrl: './bier-formulier.html',
  selector: 'add-bier'
})
export class addBierComponent implements OnInit {

  bier: Bier = new Bier();
  biersoorten = BIERSOORTEN;
  landen: Array<Land>;
  fileToUpload: File = null;

  constructor(private bierService: BierService,
              public activeModal: NgbActiveModal,
              private landenlijst: LandenlijstService) {
  }

  ngOnInit() {
    this.getLandenLijst();
  }

  createBier(bier): void {
    this.bierService.addBier(bier)
      .subscribe(data => {
        location.reload();
      });
  }

  public getLandenLijst(){
    this.landenlijst.getLandenLijst().subscribe(data => {
      this.landen = data;
    })}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
// https://stackoverflow.com/questions/48468957/save-formdata-with-file-upload-in-angular-5



//   uploadFileToActivity() {
//     this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
//       this.bier.plaatje = data// do something, if upload success
//     }, error => {
//       console.log(error);
//     });
//   }
  // UPLOADSERVICE AANMAKEN //
  // postFile(fileToUpload: File): Observable<boolean> {
  //   const endpoint = 'your-destination-url';
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   return this.httpClient
  //     .post(endpoint, formData, { headers: yourHeadersConfig })
  //     .map(() => { return true; })
  //     .catch((e) => this.handleError(e));
  // }
}
