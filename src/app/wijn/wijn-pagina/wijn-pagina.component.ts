import {Component, OnInit} from '@angular/core';
import {WijnService} from "../wijnservice/wijn.service";
import {ActivatedRoute} from '@angular/router';
import {Wijn} from "../add-wijn/wijn.model";
import {Review} from "../../algemeen/reviewservice/review.model";
import {ReviewService} from "../../algemeen/reviewservice/review.service";
import {AddWijnComponent} from "../add-wijn/add-wijn.component";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

// import {Wijn} from "../add-wijn/wijn.model";

@Component({
  selector: 'app-wijn-pagina',
  templateUrl: './wijn-pagina.component.html',
  styleUrls: ['./wijn-pagina.component.css']
})

export class WijnPaginaComponent implements OnInit {

  wijn: Wijn;
  newReview: Review = new Review();
  gevondenReview: Array<Review>;

  constructor(private wijnService: WijnService,
              private reviewService: ReviewService,
              private route: ActivatedRoute,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getWijn(+this.route.snapshot.paramMap.get('id'));
    this.getReviewForWijn(+this.route.snapshot.paramMap.get('id'));
  }

  public getWijn(id: number) {
    this.wijnService.getWijn(id).subscribe(data => {
      this.wijn = data;
    })
  };

  public addReview(): void {
    this.newReview.drank = this.wijn;
    this.reviewService.addReview(this.newReview).subscribe(data => {
      location.reload();
    });
  }

  public getReviewForWijn(id: number) {
    this.reviewService.getReview(id).subscribe(data =>{
      this.gevondenReview = data;
    })
  };

  public checkWijnPlaatje(id: number): String {
    if (this.wijn.plaatje != undefined) {
      return "http://localhost:8080/wijn/" + this.wijn.id + "/plaatje";
    }
    return "../../assets/wine.png"
  }

  open(){
    const modalRef = this.modalService.open(AddWijnComponent,{backdrop:"static"});
    modalRef.componentInstance.name = 'WijzigWijn';
  }

}
