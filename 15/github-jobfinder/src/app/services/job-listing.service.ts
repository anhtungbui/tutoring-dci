import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobListingService {
  mockDataUrl = 'assets/api/positions.json';

  constructor(private httpClient: HttpClient) { }

  fetchMockData() {
    return this.httpClient.get(this.mockDataUrl);
  }
}
