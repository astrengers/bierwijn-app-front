import {Component, OnInit} from '@angular/core';
import {WijnService} from "../wijn.service";

@Component({
  selector: 'app-wijn-lijst',
  templateUrl: './wijn-lijst.component.html',
  styleUrls: ['./wijn-lijst.component.css']
})
export class WijnLijstComponent implements OnInit {

  wijn: Array<any>;

  constructor(private wijnService: WijnService) { }

  ngOnInit() {
    this.wijnService.getAllWijn().subscribe(data => {
      this.wijn = data;
    })
  }

}
