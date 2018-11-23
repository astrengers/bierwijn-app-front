import {Component, OnInit} from '@angular/core';
import {BierService} from "../bierservice/bier.service";
import {Bier} from "../bier.model";
import {BierLijstComponent} from "../bier-lijst/bier-lijst.component";

@Component({
  selector: 'app-zoekbalk',
  templateUrl: './zoekbalk.component.html',
})
export class ZoekbalkComponent implements OnInit {

  bieren: Array<Bier>;

  formControlValue = '';
  filteredbieren: Array<Bier>;


  constructor(private bierService: BierService) { }

  ngOnInit() {

  }

  public getBierLijst(){
    this.bierService.getAllBier().subscribe(data => {
      this.bieren = data;
    })}

  public findbeers(value: string){
    this.getBierLijst()
    var output = [];
    for (let bier of this.bieren){
      if ((bier.naam.toLowerCase().includes(value.toLowerCase()))){
        output.push(bier);
      } else if((bier.merkNaam.toLowerCase().includes(value.toLowerCase()))){
        output.push(bier);
      }
    }
    this.filteredbieren = output;
  }

  public openBier(bier: Bier){
    var id = bier.id;
    this.bierService.getBier(id)
  }


}
