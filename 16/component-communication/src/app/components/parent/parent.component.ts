import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  value = "Hello from Parent";

  constructor() { }

  ngOnInit(): void {
  }

  handleOnClickMe(message) {
    console.log(message);
  }

}
