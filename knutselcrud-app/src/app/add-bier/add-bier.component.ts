import {Component} from "@angular/core";

import {Bier} from "./bier.model";
import {BierService} from "../bierservice/bier.service";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './bier-formulier.html',
  selector: 'add-bier'
})
export class addBierComponent {

  bier: Bier = new Bier();

  constructor(private bierService: BierService, public activeModal: NgbActiveModal){

  }

  createBier(): void {
    this.bierService.addBier(this.bier)
      .subscribe(data => {
        location.reload();

      });
  }





}
