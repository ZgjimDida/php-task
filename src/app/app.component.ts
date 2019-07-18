import { TrackingService } from './services/tracking.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private trackingService: TrackingService) {

  }

  trackItem(trackingId: string) {
    this.trackingService.trackItem(trackingId);
  }
}
