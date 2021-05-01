import { Component, OnInit } from '@angular/core';
import { JobListingService } from '../services/job-listing.service';

@Component({
  selector: 'dci-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css'],
})
export class PositionListComponent implements OnInit {
  positions;

  constructor(private jobListingService: JobListingService) {}

  ngOnInit(): void {}

  fetchData() {
    this.jobListingService
      .fetchMockData()
      .subscribe((data) => this.positions = data);
  }
}
