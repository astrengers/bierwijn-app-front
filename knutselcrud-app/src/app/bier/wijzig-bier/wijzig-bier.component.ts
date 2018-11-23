import {Component, OnInit} from "@angular/core";


import {Land} from "../../algemeen/landenlijst/land.model";
import {BierService} from "../bierservice/bier.service";
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LandenlijstService} from "../../algemeen/landenlijst/landenlijst.service";
import {Bier} from "../bier.model";

@Component({
  templateUrl: './wijzig-bier-formulier.html',
  selector: 'wijzig-bier'
})
export class wijzigBierComponent implements OnInit {

  eenbier: Bier;
  landen: Array<Land>;

  constructor(private bierService: BierService,
              private modalService: NgbModal,
              public activeModal: NgbActiveModal,
              private landenlijst: LandenlijstService) {
  }

  ngOnInit() {
    this.getLandenLijst();
  }

  public setBier(id: number) {
    this.bierService.getBier(id).subscribe(data => {
      this.eenbier = data;
    })
  };

  public wijzigBier(bier): void {
    this.bierService.wijzigBier(bier);
        location.reload();
  }



  public getLandenLijst(){
    this.landenlijst.getLandenLijst().subscribe(data => {
      this.landen = data;
    })}

}
