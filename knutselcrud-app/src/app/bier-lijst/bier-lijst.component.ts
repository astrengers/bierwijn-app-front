import {Component, OnInit} from '@angular/core';
import {BierService} from "../bierservice/bier.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {addBierComponent} from "../add-bier/add-bier.component";
import {Bier} from "../add-bier/bier.model";

@Component({
  selector: 'app-bier-lijst',
  templateUrl: './bier-lijst.component.html',
  styleUrls: ['./bier-lijst.component.css']
})
export class BierLijstComponent implements OnInit {

  bier: Array<any>;


  constructor(private bierService: BierService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getBierLijst();
  }

  open(){
    const modalRef = this.modalService.open(addBierComponent);
    modalRef.componentInstance.name = 'World';
  }

  openBierMetid(bierId){

  }

  public getBierLijst(){
  this.bierService.getAllBier().subscribe(data => {
    this.bier = data;

  })}

  deleteBier(bier: Bier): void {
    this.bierService.deleteBier(bier)
      .subscribe( data => {
        this.bier = this.bier.filter(u => u !== bier);
        this.getBierLijst();
      })
  };
}
