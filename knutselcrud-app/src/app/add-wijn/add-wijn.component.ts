import {Component} from "@angular/core";

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {WijnService} from "../wijnservice/wijn.service";
import {Wijn} from "./wijn.model";

@Component({
  templateUrl: './wijn-formulier.html',
  selector: 'add-wijn'
})
export class AddWijnComponent {

  wijn: Wijn = new Wijn();

  constructor(private wijnService: WijnService, public activeModal: NgbActiveModal) {

  }


  createWijn(): void {
    this.wijnService.addWijn(this.wijn)
      .subscribe(data => {
        location.reload();

      });
  }
}
