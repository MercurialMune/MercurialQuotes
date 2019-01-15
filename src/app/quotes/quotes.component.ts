import { Component, OnInit } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {

  quotes = [
    new Quote(1, 'Not all who wander are lost', 'J.R.R. Tolkien', new Date(2018, 6, 9), 'Cyprian Munene', 14, 6),
    new Quote(2, "That's What", 'She', new Date(2018, 6, 9), 'Cyprian Munene', 12, 7),
  ]

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isBoring, index) {
    if (isBoring) {
      this.quotes.splice(index, 1);
    }
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

  }


  constructor() { }

  ngOnInit() { }
  
}
