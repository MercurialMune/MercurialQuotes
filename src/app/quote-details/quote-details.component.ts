import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;

  @Output() isBoring= new EventEmitter<boolean>();
  quoteDelete(boring:boolean){
    this.isBoring.emit(boring);
  }
  sum:number = 0;
  count:number = 0;

  addUpvote(){
    this.count = this.count+1;
  }
  addDownvote(){
    this.sum = this.sum+1;
  }

  constructor() { }

  ngOnInit() {
  }

}
