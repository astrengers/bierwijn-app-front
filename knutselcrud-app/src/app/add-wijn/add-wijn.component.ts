import {Component} from "@angular/core";

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {WijnService} from "../wijnservice/wijn.service";
import {Wijn} from "./wijn.model";
import {Land} from "../landenlijst/land.model";
import {LandenlijstService} from "../landenlijst/landenlijst.service";

@Component({
  templateUrl: './wijn-formulier.html',
  selector: 'add-wijn'
})
export class AddWijnComponent {

  wijn: Wijn = new Wijn();
  landen: Array<Land>;
  fileToUpload: File = null;

  constructor(private wijnService: WijnService,
              private landenlijst: LandenlijstService,
              public activeModal: NgbActiveModal) {
  }

  ngOnInit(){
    this.getLandenLijst()
  }

  createWijn(wijn): void {
    this.wijnService.addWijnWithFile(wijn, this.fileToUpload);
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
