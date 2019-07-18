import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private http: HttpClient) { }

  trackItem(trackingId: string) {
    this.http.get('/api/v1/tracking/' + trackingId).subscribe((data: any) => {
      console.log(data);
    }, error => {
      console.log("There was an error generating the proper GUID on the server", error);
    });
  }
}
