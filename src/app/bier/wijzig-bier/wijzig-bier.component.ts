import {Component, OnInit} from "@angular/core";

import {Land} from "../../algemeen/landenlijst/land.model";
import {BierService} from "../bierservice/bier.service";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {LandenlijstService} from "../../algemeen/landenlijst/landenlijst.service";
import {Bier} from "../bier.model";
import {ActivatedRoute} from "@angular/router";
import {BIERSOORTEN} from "../biersoorten.model";

@Component({
  templateUrl: './wijzig-bier-formulier.html',
  selector: 'wijzig-bier'
})
export class wijzigBierComponent implements OnInit {

  eenBier: Bier;
  landen: Array<Land>;
  biersoorten = BIERSOORTEN;

  constructor(private bierService: BierService,
              public activeModal: NgbActiveModal,
              private route: ActivatedRoute,
              private landenlijst: LandenlijstService) {
  }

  ngOnInit() {
    this.getLandenLijst();
    // this.setBier(+(this.route.snapshot.paramMap.get('id')))
    this.setBier(this.bierService.getWijzigId());
  }

  public setBier(id: number) {
    this.bierService.getBier(id).subscribe(data => {
      this.eenBier = data;
    })
  };

  public wijzigEenBier(bier): void {
    this.bierService.wijzigBier(bier);
        location.reload();
  }

  public getLandenLijst() {
    this.landenlijst.getLandenLijst().subscribe(data => {
      this.landen = data;
    })
  }
}
