import {Component, OnInit} from '@angular/core';
import {BierService} from "../bierservice/bier.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {addBierComponent} from "../add-bier/add-bier.component";
import {Bier} from "../add-bier/bier.model";
import {AppService} from "../app.service";

@Component({
  selector: 'app-bier-lijst',
  templateUrl: './bier-lijst.component.html',
  styleUrls: ['./bier-lijst.component.css']
})
export class BierLijstComponent implements OnInit {

  bieren: Array<Bier>;

  constructor(private bierService: BierService, private modalService: NgbModal, private appService: AppService) { }

  ngOnInit() {
    this.getBierLijst();
  }

  open(){
    const modalRef = this.modalService.open(addBierComponent);
    modalRef.componentInstance.name = 'World';
  }

  public getBierLijst(){
    this.bierService.getAllBier().subscribe(data => {
      this.bieren = data;
    })}

  deleteBier(bier: Bier): void {
    this.bierService.deleteBier(bier)
      .subscribe( data => {
        this.bieren = this.bieren.filter(u => u !== bier);
        this.getBierLijst();
      })
  }

  authenticated(): boolean {
    return this.appService.authenticated;
  }

  public openBierMetid(id:number){
    this.bierService.getBier(id);
  }



}
