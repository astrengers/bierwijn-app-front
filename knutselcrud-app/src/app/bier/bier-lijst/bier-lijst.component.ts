import {Component, OnInit} from '@angular/core';
import {BierService} from "../bierservice/bier.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {addBierComponent} from "../add-bier/add-bier.component";
import {Bier} from "../bier.model";

@Component({
  selector: 'app-bier-lijst',
  templateUrl: './bier-lijst.component.html',
  styleUrls: ['./bier-lijst.component.css']
})
export class BierLijstComponent implements OnInit {

  bieren: Array<Bier>;

  constructor(private bierService: BierService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getBierLijst();
  }

  open(){
    const modalRef = this.modalService.open(addBierComponent,{backdrop:"static"});
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

  public openBierMetid(id:number){
    this.bierService.getBier(id);
  }
}
