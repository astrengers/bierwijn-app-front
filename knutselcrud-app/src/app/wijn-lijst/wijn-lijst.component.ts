import {Component, OnInit} from '@angular/core';
import {WijnService} from "../wijnservice/wijn.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddWijnComponent} from "../add-wijn/add-wijn.component";
import {Wijn} from "../add-wijn/wijn.model";

@Component({
  selector: 'app-wijn-lijst',
  templateUrl: './wijn-lijst.component.html',
  styleUrls: ['./wijn-lijst.component.css']
})
export class WijnLijstComponent implements OnInit {

  wijnen: Array<Wijn>;

  constructor(private wijnService: WijnService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getWijnLijst();
  }

  open(){
    const modalRef = this.modalService.open(AddWijnComponent);
    modalRef.componentInstance.name = 'World';
  }

  public getWijnLijst(){
    this.wijnService.getAllWijn().subscribe(data => {
      this.wijnen = data;
    })}

  deleteWijn(wijn: Wijn): void {
    this.wijnService.deleteWijn(wijn)
      .subscribe( data => {
        this.wijnen = this.wijnen.filter(u => u !== wijn);
        this.getWijnLijst();
      })
  }

  public openWijnMetid(id:number){
    this.wijnService.getWijn(id);
  }



}
