import {Component} from "@angular/core";

import {Bier} from "./bier.model";
import {BierService} from "../bierservice/bier.service";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {BIERSOORTEN} from "./biersoorten.model";

@Component({
  templateUrl: './bier-formulier.html',
  selector: 'add-bier'
})
export class addBierComponent{

  bier: Bier = new Bier();
  biersoorten = BIERSOORTEN;

  constructor(private bierService: BierService, public activeModal: NgbActiveModal){

  }

  createBier(): void {
    this.bierService.addBier(this.bier)
      .subscribe(data => {
        location.reload();

      });
  }





}
