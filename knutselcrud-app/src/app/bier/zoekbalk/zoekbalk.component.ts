import {Component, OnInit} from '@angular/core';
import {BierService} from "../bierservice/bier.service";
import {Bier} from "../bier.model";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-zoekbalk',
  templateUrl: './zoekbalk.component.html',
})
export class ZoekbalkComponent implements OnInit {


  formControlValue = '';
  filteredbieren: Array<Bier>;


  constructor(private bierService: BierService) { }

  ngOnInit() {
  }

  public findbeers(input: string){

    this.filteredbieren = [];

    if(!isNullOrUndefined(input) && input.trim().length > 0) {
      this.bierService.getAllBier().subscribe(data => {
        const bieren = data;

        var output = [];
        for (let bier of bieren) {
          if (this.matches(bier, input)) {
            output.push(bier);
          }
        }
        this.filteredbieren = output;
      });
    }
  }

  private matches(bier: Bier, input: String): boolean {

    if (input.trim().length > 0) {
      if (!isNullOrUndefined(bier.naam) && bier.naam.toLowerCase().includes(input.trim().toLowerCase())) {
        return true;
      }
      if (!isNullOrUndefined(bier.merkNaam) && bier.merkNaam.toLowerCase().includes(input.trim().toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  public openBier(bier: Bier){
    var id = bier.id;
    this.bierService.getBier(id);
  }
}
