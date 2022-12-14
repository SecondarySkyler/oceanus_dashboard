import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TelemetryService {

  constructor(private http: HttpClient) { }

  getTelemetry(): Observable<Object> {
    return this.http.get(environment.telemetryUrl);
  }

}
