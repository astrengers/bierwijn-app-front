import {Component, Input, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {WijnService} from "../wijnservice/wijn.service";
import {Wijn} from "../add-wijn/wijn.model";
import {WijnLijstComponent} from "./wijn-lijst.component";


@Component({
  selector: 'wijn-thumbnail',
  template: `
    <div class="col-12" [routerLink]="['/wijn-lijst', wijn.id]" class="well hoverwell thumbnail">
      <div class="row">
        <div style="..." class="col-md-5"> {{wijn?.naam}} </div>
        <div style="..." class="col-md-2"> {{wijn?.alcoholPercentage}}% </div>
        <div style="..." class="col-md-5"> {{wijn?.merkNaam}} </div>
      </div>
    </div>    
  `
  })

  export class WijnThumbnail implements OnInit {
  @Input() wijn:Wijn;

  wijnen: Array<Wijn>;


  constructor(private wijnService: WijnService,private wijnLijstComponent:WijnLijstComponent , private route:ActivatedRoute) {

  }

  ngOnInit() {
  }

  deleteWijn(wijn: Wijn): void {
    this.wijnLijstComponent.deleteWijn(wijn)
    }
  }
