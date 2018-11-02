import {Component, OnInit} from '@angular/core';
import {BierService} from "../bierservice/bier.service";
import {ActivatedRoute} from '@angular/router';
import {Bier} from "../add-bier/bier.model";
import {Review} from "../reviewservice/review.model";
import {ReviewService} from "../reviewservice/review.service";


// import {Bier} from "../add-bier/bier.model";

@Component({
  selector: 'app-bier-pagina',
  templateUrl: './bier-pagina.component.html',
  styleUrls: ['./bier-pagina.component.css']
})

export class BierPaginaComponent implements OnInit {

  bier: Bier;
  newReview: Review = new Review();
  gevondenReview: Array<Review>;

  constructor(private bierService: BierService, private reviewService: ReviewService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getBier(+this.route.snapshot.paramMap.get('id'));
    this.getReviewForBier(+this.route.snapshot.paramMap.get('id'));
  }

  public getBier(id: number) {
    this.bierService.getBier(id).subscribe(data => {
      this.bier = data;
    })
  };

  public addReview(): void {
    this.newReview.drank = this.bier;
    this.reviewService.addReview(this.newReview).subscribe(data => {
      location.reload();
    });
  }

  public getReviewForBier(id: number) {
    this.reviewService.getReview(id).subscribe(data =>{
      this.gevondenReview = data;
    })
  };

  afuConfig = {
    uploadAPI: {
      url:"http://localhost:8080/bier/" +this.route.snapshot.paramMap.get('id') + "/plaatje"
    }
  };

}
