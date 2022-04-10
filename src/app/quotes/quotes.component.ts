import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  defaultQuote: Quote = new Quote(
    'Samuel Martins',
    'Samuel Martins',
    'Life is what you make of it. It is everything you want it to be. It is the choices that you make that spices it up. Live it without regrets'
  );
  quotes: Quote[] = [
    new Quote(
      'Barack Obama',
      'Samuel Martins',
      "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere"
    ),
    new Quote(
      'Steve Jobs',
      'Samuel Martins',
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking"
    ),
    new Quote(
      'Oprah Winfrey',
      'Samuel Martins',
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough"
    ),
  ];

  topVoted: any = this.defaultQuote;
  topVotes: number = 0;

  newQuote!: Quote;

  highestVoted(quotes: any) {
    for (let i = 0; i < quotes.length; i++) {
      if (quotes[i].upvotes > this.topVotes) {
        this.topVotes = quotes[i].upvotes;
        this.topVoted = quotes[i];
      }
    }

    if (this.topVotes === 0) {
      this.topVoted = this.defaultQuote;
    }
  }

  upvote(index: number) {
    this.quotes[index].upvotes += 1;
    this.highestVoted(this.quotes);
  }

  downvote(index: number) {
    this.quotes[index].downvotes += 1;
    this.highestVoted(this.quotes);
  }

  toggleDetails(index: number) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
    if (this.quotes[index].showDetails) {
      this.quotes[index].buttonText = 'hide details';
    } else {
      this.quotes[index].buttonText = 'show details';
    }
  }

  addNewQuote(event: Quote) {
    this.quotes.push(event);
  }

  deleteQuote(quoteDelete: boolean, index: number) {
    if (quoteDelete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
