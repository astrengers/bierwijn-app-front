import { Component, OnInit } from '@angular/core';
import {BierService} from "../bierservice/bier.service";
import {ActivatedRoute} from '@angular/router';
import {Bier} from "../add-bier/bier.model";
// import {Bier} from "../add-bier/bier.model";

@Component({
  selector: 'app-bier-pagina',
  templateUrl: './bier-pagina.component.html',
  styleUrls: ['./bier-pagina.component.css']
})
export class BierPaginaComponent implements OnInit {

  bier: Bier;

  constructor(private bierService: BierService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBier();
     
    }

  public getBier() {
    this.bier = this.bierService.getBier();
  }
}

