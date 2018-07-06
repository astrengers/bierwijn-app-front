import {Component, Input, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {BierService} from "../bierservice/bier.service";
import {Bier} from "../add-bier/bier.model";


@Component({
  selector: 'bier-thumbnail',
  template: `
      <div class="row">
        <div style="..." class="col-md-5"> {{bier?.naam}} </div>
        <div style="..." class="col-md-2"> {{bier?.alcoholPercentage}}% </div>
        <div style="..." class="col-md-5"> {{bier?.merkNaam}} </div>
      </div>
  `
  })

  export class BierThumbnail implements OnInit {
  @Input() bier:Bier;


  constructor(private bierService: BierService , private route:ActivatedRoute) {

  }

  ngOnInit() {
  }




  }
