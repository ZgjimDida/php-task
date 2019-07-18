import { TrackingService } from './services/tracking.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: any;
  constructor(private trackingService: TrackingService) {

  }

  trackItem(trackingId: string) {
    this.trackingService.trackItem(trackingId).subscribe(response => {
      this.result = response;
    }, error => {
      console.log("There was an error generating the proper GUID on the server", error);
    });
  }
}
