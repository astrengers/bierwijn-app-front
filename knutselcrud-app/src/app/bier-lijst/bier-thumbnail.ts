import {Component, Input, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {BierService} from "../bierservice/bier.service";
import {Bier} from "../add-bier/bier.model";
import {BierLijstComponent} from "./bier-lijst.component";


@Component({
  selector: 'bier-thumbnail',
  template: `
    <div class="col-12" [routerLink]="['/bier-lijst', bier.id]" class="well hoverwell thumbnail">
      <div class="row">
        <div style="..." class="col-md-5"> {{bier?.naam}} </div>
        <div style="..." class="col-md-2"> {{bier?.alcoholPercentage}}% </div>
        <div style="..." class="col-md-5"> {{bier?.merkNaam}} </div>
      </div>
    </div>    
  `
  })

  export class BierThumbnail implements OnInit {
  @Input() bier:Bier;

  bieren: Array<Bier>;


  constructor(private bierService: BierService,private bierLijstComponent:BierLijstComponent , private route:ActivatedRoute) {

  }

  ngOnInit() {
  }

  deleteBier(bier: Bier): void {
    this.bierLijstComponent.deleteBier(bier)
    }
  }
