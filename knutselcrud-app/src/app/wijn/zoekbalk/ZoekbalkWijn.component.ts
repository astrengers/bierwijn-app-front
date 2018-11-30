import {Component, OnInit} from '@angular/core';
import {Wijn} from "../add-wijn/wijn.model";
import {isNullOrUndefined} from "util";
import {WijnService} from "../wijnservice/wijn.service";

@Component({
  selector: 'app-wijnzoekbalk',
  templateUrl: './zoekbalkWijn.component.html',
})
export class ZoekbalkWijnComponent implements OnInit {


  formControlValue = '';
  filteredwijnen: Array<Wijn>;


  constructor(private wijnService: WijnService) { }

  ngOnInit() {
  }

  public findwijnen(input: string){

    this.filteredwijnen = [];

    if(!isNullOrUndefined(input) && input.trim().length > 0) {
      this.wijnService.getAllWijn().subscribe(data => {
        const wijnen = data;

        var output = [];
        for (let wijn of wijnen) {
          if (this.matches(wijn, input)) {
            output.push(wijn);
          }
        }
        this.filteredwijnen = output;
      });
    }
  }

  private matches(wijn: Wijn, input: String): boolean {

    if (input.trim().length > 0) {
      if (!isNullOrUndefined(wijn.naam) && wijn.naam.toLowerCase().includes(input.trim().toLowerCase())) {
        return true;
      }
      if (!isNullOrUndefined(wijn.merkNaam) && wijn.merkNaam.toLowerCase().includes(input.trim().toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  public openWijn(wijn: Wijn){
    var id = wijn.id;
    this.wijnService.getWijn(id);
  }
}
