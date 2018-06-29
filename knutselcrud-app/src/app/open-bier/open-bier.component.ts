import {Component} from "@angular/core";
import {BierService} from "../bierservice/bier.service";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: './open-bier.html',
  selector: 'open-bier'
})
export class addBierComponent {

  bier:any; // moet any zijn, anders gemekker over void

  constructor(private bierService: BierService,
              public activeModal: NgbActiveModal,
              private route: ActivatedRoute){
  }

  ngOnit(){
    this.bier = this.bierService.getBier(+this.route.params['id'])
  }
}
