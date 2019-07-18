import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private http: HttpClient) { }

  trackItem(trackingId: string): Observable<any> {
    return this.http.get<any>('/api/v1/tracking/' + trackingId);
  }
}
