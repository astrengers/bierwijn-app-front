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
    // this.bier.plaatje = this.fileToUpload;
    this.bierService.addBierWithFile(bier, this.fileToUpload);
        location.reload();
  }

  public getLandenLijst(){
    this.landenlijst.getLandenLijst().subscribe(data => {
      this.landen = data;
    })}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}
