import {Component} from '@angular/core'


@Component({
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
  })
  
