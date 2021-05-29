import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message;
  @Input() name;
  @Output() onClickMe = new EventEmitter();

  localMessage = 'Blah blah';
  randomNumber = 0;

  constructor() { 
  }
  
  ngOnInit(): void {
    this.message = this.message + ' from a child component';
  }

  handleOnClick() {
    this.randomNumber = this.randomNumber + 1;
    this.manipulateLocalMessage();

  }

  manipulateLocalMessage() {
    this.localMessage = 'BOOM!';
  }
}
