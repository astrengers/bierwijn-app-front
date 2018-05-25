import { Component, OnInit } from '@angular/core';
import {BierService} from "../bier.service";

@Component({
  selector: 'app-bier-lijst',
  templateUrl: './bier-lijst.component.html',
  styleUrls: ['./bier-lijst.component.css']
})
export class BierLijstComponent implements OnInit {

  bier: Array<any>;

  biertjes: String[];
  
  constructor(private bierService: BierService) { }

  ngOnInit() {
    this.bierService.getAllBier().subscribe(data => {
      this.bier = data;
      
    })
    this.biertjes = ["Pim", "Axel", "Thijs"];
  }

}
