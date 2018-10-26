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
  review: Review = new Review();

  constructor(private bierService: BierService, private reviewService: ReviewService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getBier(+this.route.snapshot.paramMap.get('id'));
  }

  public getBier(id: number) {
    this.bierService.getBier(id).subscribe(data => {
      this.bier = data;
    })
  };

  public addReview(): void {
    this.review.drank = this.bier;
    this.reviewService.addReview(this.review).subscribe(data => {
      location.reload();
    });
  }

  afuConfig = {
    uploadAPI: {
      url:"http://localhost:8080/bier/" +this.route.snapshot.paramMap.get('id') + "/plaatje"
    }
  };

}
