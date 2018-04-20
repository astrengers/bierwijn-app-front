import { Component, OnInit } from '@angular/core';
import { BierServiceService } from "../bier-service/bier-service.service";

@Component({
  selector: 'app-bier-lijst',
  templateUrl: './bier-lijst.component.html',
  styleUrls: ['./bier-lijst.component.css']
})
export class BierLijstComponent implements OnInit {

  bier: Array<any>;

  constructor(private bierService: BierServiceService) { }

  ngOnInit() {
    this.bierService.getAllBier().subscribe(data => {
      this.bier = data;
    })
  }

}
